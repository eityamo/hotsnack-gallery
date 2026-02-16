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
        elements = page.search('.ly-mod-infoset4 a')

        urls = elements.map { |ele| ele.get_attribute(:href) }

        urls.each_with_index do |url, i|
          page = fetch_page(url)
          puts "name: #{page.at('.ly-mod-ttl-main').inner_text}"
          @data << [
            i + 200,
            page.at('.js-mainimage-size img').get_attribute('src').split('/')[5].match(/[^.jpg]+/).to_s,
            page.at('.ly-mod-ttl-main').inner_text,
            page.at('.ly-kakaku-usual span').inner_text.match(/[^円]+/).to_s.to_f.round,
            page.at('.ly-goods-lead').inner_text,
            "https://www.family.co.jp" + page.at('.js-mainimage-size img').get_attribute('src'),
          ]
        end
      end
    end
  end
end
