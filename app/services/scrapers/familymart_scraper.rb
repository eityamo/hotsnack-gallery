require "uri"

module Scrapers
  class FamilymartScraper < BaseScraper
    private

    def pages
      [
        'https://www.family.co.jp/goods/friedfoods.html',
        'https://www.family.co.jp/goods/chukaman.html'
      ]
    end

    def csv_output_path
      Rails.root.join('db/fixtures/csv/familymart/hotsnack_v1.csv').to_s
    end

    def scrape
      pages.each do |pg|
        page = @agent.get(pg)
        urls = page.links.map(&:href).compact.filter_map do |href|
          next unless href.match?(%r{\A(?:https?://www\.family\.co\.jp)?/goods/(?:friedfoods|chukaman)/\d+\.html(?:\?.*)?\z})
          URI.join(pg, href).to_s
        end.uniq

        puts "FamilyMart list page: #{pg} (#{urls.size} urls)"

        urls.each do |url|
          page = fetch_page(url)
          name = page.at('.ly-mod-ttl-main')&.inner_text&.strip || page.at('h1')&.inner_text&.strip
          next if name.nil? || name.empty?

          page_text = page.at('body')&.inner_text.to_s
          price_match = page_text.match(/(\d[\d,]*)円(?:\s*（税込\s*\d[\d,]*円?\）)?/)
          price = price_match ? price_match[1].delete(',').to_i : 0
          description = page.at('.ly-goods-lead')&.inner_text&.strip || page.at('meta[property="og:description"]')&.get_attribute('content').to_s.strip
          image = page.at('meta[property="og:image"]')&.get_attribute('content').to_s
          item_uuid = URI.parse(url).path.split('/').last.to_s.sub('.html', '')

          puts "name: #{name}"
          @data << [
            200 + @data.size + 1,
            item_uuid,
            name,
            price,
            description,
            image,
          ]
        end
      end
    end
  end
end
