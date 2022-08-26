require 'csv'
require 'mechanize'
agent = Mechanize.new
pages = ['https://www.lawson.co.jp/recommend/original/fry/', 'https://www.lawson.co.jp/recommend/original/chukaman/']

# スクレイピングで取得したデータ
data = []

pages.each do |pg|
  page = agent.get(pg)
  elements = page.search('.heightLineParent li p a')

  # 詳細ページのURLリスト
  urls = []

  # aタグの中のURLを引き抜く
  elements.each do |ele|
    urls << ele.get_attribute(:href)
  end

  # それぞれの詳細ページにアクセスする
  urls.each_with_index do |url, i|
    page = agent.get(url)
    p "name: #{page.at('.rightBlock p').inner_text}"
    data << [
      id = i + 101,
      item_uuid = page.at('.leftBlock p img').get_attribute('src').split('/')[5].match(/[^.png]+/).to_s,
      name = page.at('.rightBlock p').inner_text,
      price = page.at('.rightBlock dl dd span').inner_text.match(/[^円]+/).to_s.to_f.round,
      description = page.at('.rightBlock .text').inner_text,
      image = "https://www.lawson.co.jp" + page.at('.leftBlock p img').get_attribute('src'),
    ]
    sleep 1
  end
end

bom = %w[EF BB BF].map { |e| e.hex.chr }.join
csv_file = CSV.generate(bom) do |csv|
  data.each do |datum|
    csv << datum
  end
end

File.open('./hotsnack.csv', 'w', force_quotes: true) do |file|
  file.write(csv_file.force_encoding('UTF-8'))
end
