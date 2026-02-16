namespace :scrape do
  desc "セブン-イレブンのホットスナックをスクレイピング"
  task seven_eleven: :environment do
    Scrapers::SevenElevenScraper.new.call
  end

  desc "ローソンのホットスナックをスクレイピング"
  task lawson: :environment do
    Scrapers::LawsonScraper.new.call
  end

  desc "ファミリーマートのホットスナックをスクレイピング"
  task familymart: :environment do
    Scrapers::FamilymartScraper.new.call
  end

  desc "全ストアのホットスナックをスクレイピング"
  task all: :environment do
    Scrapers::SevenElevenScraper.new.call
    Scrapers::LawsonScraper.new.call
    Scrapers::FamilymartScraper.new.call
  end
end
