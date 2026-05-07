"use client";

interface MoneyDescriptionModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function MoneyDescriptionModal({
  isVisible,
  onClose,
}: MoneyDescriptionModalProps) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-[370px] w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold mt-2 mb-4">評価額の計算方法</h1>
        <h2 className="text-base mt-3">
          ( 👍 いいね数 ) ✖︎ ( 💰 ホットスナックの値段 )
        </h2>
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
