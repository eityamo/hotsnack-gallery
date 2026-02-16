module Scrapers
  class BaseScraper
    def initialize
      @agent = Mechanize.new
      @data = []
    end

    def call
      scrape
      write_csv
    end

    private

    def scrape
      raise NotImplementedError
    end

    def pages
      raise NotImplementedError
    end

    def csv_output_path
      raise NotImplementedError
    end

    def write_csv
      bom = %w[EF BB BF].map { |e| e.hex.chr }.join
      csv_file = CSV.generate(bom) do |csv|
        @data.each { |datum| csv << datum }
      end

      File.open(csv_output_path, 'w') do |file|
        file.write(csv_file.force_encoding('UTF-8'))
      end

      puts "CSV output: #{csv_output_path} (#{@data.size} items)"
    end

    def fetch_page(url)
      page = @agent.get(url)
      sleep 1
      page
    end
  end
end
