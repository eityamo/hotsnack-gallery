module ApplicationHelper
  def default_meta_tags
    {
      title: 'ホットスナック美術館',
      description: 'ホットスナック美術館は、コンビニのレジ横でホットスナックがじっくり選べないという社会課題を解決するために開館されました。美術品のように額縁に入ったホットスナックをじっくり鑑賞し、コンビニ横の息苦しさから解放されよう♪',
      keywords: 'ホットスナック美術館, ホットスナック 美術館, ホットスナック 私立, ホットスナック セブンイレブン, ホットスナック ローソン, ホットスナック ファミリーマート, ホットスナック 私立美術館 , 美術館 個人, 私立美術館, HOTSNACK GALLERY',
      charset: 'UTF-8',
      og: {
        site_name: 'ホットスナック美術館 | HOTSNACK GALLERY',
        title: 'ホットスナック美術館-コンビニのホットスナックをじっくり鑑賞できるサービス',
        description: 'ホットスナック美術館は、コンビニのレジ横でホットスナックがじっくり選べないという社会課題を解決するために開館されました。美術品のように額縁に入ったホットスナックをじっくり鑑賞し、コンビニ横の息苦しさから解放されよう♪',
        type: 'website',
        url: request.original_url,
        image: image_url('/img/ogp.jpeg'),
        locale: 'ja_JP'
      },
      twitter: {
        site: '@eityamo',
        card: 'summary_large_image'
      }
    }
  end
end
