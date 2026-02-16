module Scrapers
  class LawsonScraper < BaseScraper
    private

    def pages
      [
        'https://www.lawson.co.jp/recommend/original/fry/',
        'https://www.lawson.co.jp/recommend/original/chukaman/'
      ]
    end

    def csv_output_path
      Rails.root.join('db/fixtures/csv/lawson/hotsnack_v1.csv').to_s
    end

    def scrape
      pages.each do |pg|
        page = @agent.get(pg)
        elements = page.search('.heightLineParent li p a')

        urls = elements.map { |ele| ele.get_attribute(:href) }

        urls.each_with_index do |url, i|
          page = fetch_page(url)
          puts "name: #{page.at('.rightBlock p').inner_text}"
          @data << [
            i + 101,
            page.at('.leftBlock p img').get_attribute('src').split('/')[5].match(/[^.png]+/).to_s,
            page.at('.rightBlock p').inner_text,
            page.at('.rightBlock dl dd span').inner_text.match(/[^円]+/).to_s.to_f.round,
            page.at('.rightBlock .text').inner_text,
            "https://www.lawson.co.jp" + page.at('.leftBlock p img').get_attribute('src'),
          ]
        end
      end
    end
  end
end
