module ApplicationHelper
  def default_meta_tags
    {
      title: 'ホットスナック私立美術館',
      description: 'ホットスナック私立美術館は、コンビニのレジ横でホットスナックがじっくり選べないという社会課題を解決するために開館されました。気になるホットスナックをじっくり鑑賞しよう♪',
      keywords: 'ホットスナック美術館, ホットスナック 美術館, ホットスナック 私立, ホットスナック セブンイレブン, ホットスナック ローソン, ホットスナック ファミリーマート, ホットスナック 私立美術館 , 美術館 個人, 私立美術館',
      charset: 'UTF-8',
      og: {
        site_name: 'ホットスナック私立美術館 | HOTSNACK GALLERY',
        title: 'ホットスナック私立美術館 - 気になるコンビニのホットスナックをじっくり鑑賞できるサービス',
        description: 'ホットスナック美術館は、コンビニのレジ横でホットスナックがじっくり選べないという社会課題を解決するために開館されました。額縁に入ったホットスナックをじっくり鑑賞しよう♪',
        type: 'website',
        url: request.original_url,
        image: '/img/ogp.jpg',
        locale: 'ja_JP'
      },
      twitter: {
        site: '@eityamo',
        card: 'summary_large_image'
      }
    }
  end
end
