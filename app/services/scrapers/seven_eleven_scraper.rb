module Scrapers
  class SevenElevenScraper < BaseScraper
    private

    def pages
      [
        "https://www.sej.co.jp/products/a/cat/090030010000000/1/l15/",
        "https://www.sej.co.jp/products/a/cat/090030010000000/2/l15/",
        "https://www.sej.co.jp/products/a/cat/090030010000000/3/l15/",
        "https://www.sej.co.jp/products/a/chukaman/"
      ]
    end

    def csv_output_path
      Rails.root.join('db/fixtures/csv/seven_eleven/hotsnack_v1.csv').to_s
    end

    def scrape
      pages.each do |pg|
        page = @agent.get(pg)
        elements = page.search('.list_inner figure a')

        urls = elements.map { |ele| ele.get_attribute(:href) }

        urls.each_with_index do |url, i|
          page = fetch_page(url)
          puts "name: #{page.at('.item_ttl h1').inner_text}"
          @data << [
            i + 1,
            page.at('.productWrap ul li img').get_attribute('src').split('/')[4],
            page.at('.item_ttl h1').inner_text,
            page.at('.item_price p').inner_text.match(/(?<=税込)[^円]+/).to_s.to_f.round,
            page.at('.item_text p').inner_text,
            page.at('.productWrap ul li img').get_attribute('src'),
            page.at('.item_region p').inner_text.match(/[^販売地域：]+/).to_s,
          ]
        end
      end
    end
  end
end
