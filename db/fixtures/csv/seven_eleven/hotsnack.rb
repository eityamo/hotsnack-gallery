require 'csv'
require 'mechanize'
agent = Mechanize.new
pages = ["https://www.sej.co.jp/products/a/cat/090030010000000/1/l15/", "https://www.sej.co.jp/products/a/cat/090030010000000/2/l15/", "https://www.sej.co.jp/products/a/cat/090030010000000/3/l15/", "https://www.sej.co.jp/products/a/chukaman/"]

# スクレイピングで取得したデータ
data = []

pages.each do |pg|
  page = agent.get(pg)
  elements = page.search('.list_inner figure a')

  # 詳細ページのURLリスト
  urls = []

  # aタグの中のURLを引き抜く
  elements.each do |ele|
    urls << ele.get_attribute(:href)
  end

  # それぞれの詳細ページにアクセスする
  urls.each_with_index do |url, i|
    page = agent.get(url)
    p "name: #{page.at('.item_ttl h1').inner_text}"
    data << [
      id = i + 1,
      item_uuid = page.at('.productWrap ul li img').get_attribute('src').split('/')[4],
      name = page.at('.item_ttl h1').inner_text,
      price = page.at('.item_price p').inner_text.match(/(?<=税込)[^円]+/).to_s.to_f.round,
      description = page.at('.item_text p').inner_text,
      image = page.at('.productWrap ul li img').get_attribute('src'),
      area = page.at('.item_region p').inner_text.match(/[^販売地域：]+/).to_s,
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
