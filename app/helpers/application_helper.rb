module ApplicationHelper
  def default_meta_tags
    {
      title: 'ホットスナック私立美術館 - 気になるコンビニのホットスナックをじっくり鑑賞できるサービス',
      description: 'ホットスナック私立美術館は、コンビニのレジ横で他人の視線を気にしながらホットスナックを選ぶ現在の社会課題を解決するために開館されました。気になるホットスナックをじっくり鑑賞しよう♪',
      keywords: 'ホットスナック美術館, ホットスナック 美術館, ホットスナック 私立, ホットスナック セブンイレブン, ホットスナック ローソン, ホットスナック ファミリーマート, ホットスナック 私立美術館 , 美術館 個人, 私立美術館',
      charset: 'UTF-8',
      og: {
        site_name: 'ホットスナック私立美術館',
        title: 'HOTSNACK GALLERY | 気になるコンビニのホットスナックをじっくり鑑賞できるサービス',
        description: 'HOTSNACK GALLERYは、コンビニのレジ横で他人の視線を気にしながらホットスナックを選ぶ現在の社会課題を解決するために開館されました。気になるホットスナックをじっくり鑑賞しよう♪',
        type: 'website',
        url: request.original_url,
        image: image_url('ogp.png'),
        locale: 'ja_JP'
      },
      twitter: {
        site: '@eityamo',
        card: 'summary_large_image'
      }
    }
  end
end
