"use client";

interface PrivacyPolicyModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isVisible,
  onClose,
}: PrivacyPolicyModalProps) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-[800px] w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold mt-4 mb-2">プライバシーポリシー</h1>

        <h2 className="text-base font-bold mt-4">
          お客様から取得する情報
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、お客様から以下の情報を取得します。
        </p>
        <ul className="list-disc ml-6 text-sm leading-7">
          <li>Cookie(クッキー)を用いて生成された識別情報</li>
          <li>
            OSが生成するID、端末の種類、端末識別子等のお客様が利用するOSや端末に関する情報
          </li>
          <li>
            当社ウェブサイトの滞在時間、入力履歴、購買履歴等の当社ウェブサイトにおけるお客様の行動履歴
          </li>
          <li>
            当社アプリの起動時間、入力履歴、購買履歴等の当社アプリの利用履歴
          </li>
          <li>お客様の位置情報</li>
        </ul>

        <h2 className="text-base font-bold mt-4">
          お客様の情報を利用する目的
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、お客様から取得した情報を、以下の目的のために利用します。
        </p>
        <ul className="list-disc ml-6 text-sm leading-7">
          <li>お客様の当社サービスの利用履歴を管理するため</li>
          <li>
            ユーザーの行動履歴を分析し、当社の維持改善に役立てるため
          </li>
          <li>市場分析、マーケティングのため</li>
          <li>お客様からのお問い合わせに対応するため</li>
          <li>当社の規約や法令に違反する行為に対応するため</li>
          <li>
            当社サービスの変更、提供中止、終了、契約解除をご連絡するため
          </li>
          <li>当社規約の変更等を通知するため</li>
          <li>
            以上の他、当社サービスの提供、維持、保護及び改善のため
          </li>
        </ul>

        <h2 className="text-base font-bold mt-4">
          安全管理のために講じた措置
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社が、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。
        </p>

        <h2 className="text-base font-bold mt-4">第三者提供</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、お客様から取得する情報のうち、個人データ（個人情報保護法第２条第６項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。
        </p>
        <p className="text-sm leading-7 ml-2 my-1">
          但し、次の場合は除きます。
        </p>
        <ul className="list-disc ml-6 text-sm leading-7">
          <li>個人データの取扱いを外部に委託する場合</li>
          <li>当社や当社サービスが買収された場合</li>
          <li>
            事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）
          </li>
          <li>
            その他、法律によって合法的に第三者提供が許されている場合
          </li>
        </ul>

        <h2 className="text-base font-bold mt-4">アクセス解析ツール</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。
        </p>

        <h2 className="text-base font-bold mt-4">
          プライバシーポリシーの変更
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
        </p>

        <h2 className="text-base font-bold mt-4">お問い合わせ</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          お問い合わせの際は、公式アカウントのメッセージにて承ります。
        </p>
        <p className="text-sm text-right mt-4">2022年07月25日 制定</p>
        <div className="text-center mt-2">
          <a
            href="https://twitter.com/eityamo"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @eityamo
          </a>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
