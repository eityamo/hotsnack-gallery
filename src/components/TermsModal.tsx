"use client";

interface TermsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function TermsModal({ isVisible, onClose }: TermsModalProps) {
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
        <h1 className="text-2xl font-bold mt-4 mb-2">利用規約</h1>
        <p className="text-sm leading-7 ml-2 my-1">
          この利用規約(以下、「本規約」といいます。)は、本サービス(本サイトを含むものとし、以下、特に両者を区別しません。)の利用条件を定めるものです。本規約は、本サービスを利用するすべてのユーザーに適用されます。
        </p>

        <h2 className="text-base font-bold mt-4">第1条（本規約への同意）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          ユーザーは、本サービスを利用することによって、本規約に有効かつ取り消し不能な同意をしたものとみなされます。本規約に同意しないユーザーは、本サービスをご利用いただけません。
        </p>

        <h2 className="text-base font-bold mt-4">第2条（未成年による利用）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          ユーザーが未成年である場合には、法定代理人の同意を得た上で、本サービスを利用してください。本サービスのご利用にあたり必要となるスマートフォンその他デバイスについても、必ず法定代理人の同意を得た上でご使用下さい。
          法定代理人の同意を得ずに本サービスのご利用を開始したユーザーが成年に達した場合、未成年者であった間の利用行為を追認したものとみなします。
        </p>

        <h2 className="text-base font-bold mt-4">
          第3条（コンテンツのご利用）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、ユーザーに対し、本サービスが提供する文章、画像、動画、音声、音楽、ソフトウェア、プログラム、コードその他のコンテンツについて、本サービスの利用範囲内における私的な利用を許諾します。有償コンテンツについては、当社が定める利用料金の支払が完了した場合に、本サービスの利用範囲内における私的な利用を許諾します。これは、譲渡及び再許諾できない、非独占的な利用権です。この範囲を超えて本サービスが提供するコンテンツを利用することは一切禁止します。
          理由の如何を問わず、ユーザーが本サービスを利用する権利を失った場合、本サービスの一切のコンテンツの利用ができなくなることを、ユーザーは予め承諾するものとします。
        </p>

        <h2 className="text-base font-bold mt-4">第4条（禁止事項）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
        </p>
        <ul className="list-disc ml-6 text-sm leading-7">
          <li>
            法令、裁判所の判決、決定若しくは命令、又は法令上拘束力のある行政措置に違反する行為又はこれらを助長する行為
          </li>
          <li>犯罪行為に関連する行為</li>
          <li>当社や第三者の知的財産権を侵害する行為</li>
          <li>
            当社や第三者の肖像権、プライバシー、名誉、その他の権利又は利益を侵害する行為
          </li>
          <li>
            当社や第三者のサーバーまたはネットワークに過度の負担をかけたり、その正常な作動を妨害する行為
          </li>
          <li>当社のサービスの運営を妨害するおそれのある行為</li>
          <li>不正アクセスをし、またはこれを試みる行為</li>
          <li>
            逆アセンブル、逆コンパイル、リバースエンジニアリング等によって本サービスのソースコードを解析する行為
          </li>
          <li>
            本サービスに接続しているシステムに権限なく不正にアクセスし又は当社設備に蓄積された情報を不正に書き換え若しくは消去する行為
          </li>
          <li>
            本サービスのウェブサイトやソフトウェアを複製、送信、譲渡、貸与又は改変する行為
          </li>
          <li>本サービスによって得られた情報を商業的に利用する行為</li>
          <li>
            当社が意図しない方法によって本サービスに関連して利益を得ることを目的とする行為
          </li>
          <li>
            当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
          </li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>違法、不正又は不当な目的を持って本サービスを利用する行為</li>
          <li>
            本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
          </li>
          <li>面識のない異性との出会いを目的とした行為</li>
          <li>公序良俗に違反する行為</li>
          <li>
            歩行中、車両運転中、その他本サービスの利用が不適切な状況又は態様において本サービスを利用する行為
          </li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>

        <h2 className="text-base font-bold mt-4">
          第5条（換金行為の禁止）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          本サービス内で取得した一切のコンテンツまたは本仮想通貨については、手段の如何を問わず、以下の取引を一切禁止します。
        </p>
        <ul className="list-disc ml-6 text-sm leading-7">
          <li>売買</li>
          <li>
            金銭その他の対価を授受する形でのあらゆる譲渡、譲受、貸与、借用等
          </li>
          <li>その他換金行為に該当すると当社が判断する一切の行為</li>
        </ul>

        <h2 className="text-base font-bold mt-4">
          第6条（反社会的勢力の排除）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          ユーザーは、次の各号のいずれか一にも該当しないことを表明し、かつ将来にわたっても該当しないことを表明し、保証するものとします。
        </p>

        <h2 className="text-base font-bold mt-4">第7条（利用制限）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
        </p>

        <h2 className="text-base font-bold mt-4">
          第8条（本サービスの提供の停止）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。当社は、この場合にユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
        </p>

        <h2 className="text-base font-bold mt-4">第9条（保証の否認）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、本サービスや本サービスが提供するコンテンツに、システムバグや第三者の権利侵害が含まれないことを保証するものではありません。また、安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性を保証するものでもありません。
        </p>

        <h2 className="text-base font-bold mt-4">第10条（免責）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、本サービスに関してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
        </p>

        <h2 className="text-base font-bold mt-4">
          第11条（サービス内容の変更）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、ユーザーに通知することなく、本サービスの内容を変更したり、本サービスの提供を中止、終了することができるものとします。ユーザーは、本サービスが終了した場合、有料コンテンツを利用する一切の権利を失い、以後、当該有料コンテンツを利用できなくなることについて、あらかじめ、異議なく同意するものとします。当社は、これらによってユーザーに生じた損害について一切の責任を負いません。
        </p>

        <h2 className="text-base font-bold mt-4">
          第12条（利用規約の変更）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。変更後の本規約は、当社ウェブサイトに掲示された時点から効力を生じるものとします。本規約の変更後、本サービスの利用を継続したユーザーは、変更後の本規約に同意したものとみなします。
        </p>

        <h2 className="text-base font-bold mt-4">
          第13条（個人情報の取扱い）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          本サービスの利用によって取得するユーザーの個人情報については、当社のプライバシーポリシーに従い適切に取り扱うものとします。
        </p>

        <h2 className="text-base font-bold mt-4">
          第14条（通知または連絡）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
        </p>

        <h2 className="text-base font-bold mt-4">
          第15条（権利義務の譲渡）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
        </p>

        <h2 className="text-base font-bold mt-4">第16条（事業譲渡）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          当社は本サービスにかかる事業を他社に事業譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにユーザーの情報を当該事業譲渡の譲受人に譲渡することができるものとします。
        </p>

        <h2 className="text-base font-bold mt-4">第17条（適用関係）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
        </p>

        <h2 className="text-base font-bold mt-4">第18条（分離可能性）</h2>
        <p className="text-sm leading-7 ml-2 my-1">
          本規約のいずれかの条項又はその一部が無効又は執行不能と判断された場合であっても、当該判断は他の部分に影響を及ぼさず、本規約の残りの部分は、引き続き有効かつ執行力を有するものとします。
        </p>

        <h2 className="text-base font-bold mt-4">
          第19条（準拠法・裁判管轄）
        </h2>
        <p className="text-sm leading-7 ml-2 my-1">
          本規約の解釈にあたっては、日本法を準拠法とします。
        </p>
        <p className="text-sm leading-7 ml-2 my-1">
          本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する地方裁判所を専属的合意管轄とします。
        </p>
        <p className="text-sm text-right mt-4">2022年07月25日 制定</p>

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
