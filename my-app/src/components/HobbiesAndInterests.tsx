const HobbiesAndInterests = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-left w-[500px]">
        <h1
          className="text-2xl bg-gray-700 w-[300px] text-center p-1
            rounded font-bold"
        >
          Hobbies and Interests
        </h1>
        <p className="my-4">
          大学の講義やバイト以外の時間は大体こんなことしてます
        </p>
        <div className="flex m-1">
          <p className="mr-1">⚫︎</p>
          <p className="font-bold">Outdoor</p>
          <p className="mx-2">-</p>
          <p className="text-wrap">目的なくただ歩いたり散歩が好きです。</p>
        </div>
        <div className="flex m-1">
          <p className="mr-1">⚫︎</p>
          <p className="font-bold">Food</p>
          <p className="mx-2">-</p>
          <p className="text-wrap">
            将来いい雰囲気のレストランでワインを嗜めるような渋い男になりたいなと思い、
            月に1,
            2回イタリアンやフレンチのレストランを自分で予約して友人と行ったり
            一人で行ったりしています。
          </p>
        </div>
        <div className="flex m-1">
          <p className="mr-1">⚫︎</p>
          <p className="font-bold">Relax</p>
          <p className="mx-2">-</p>
          <p className="text-wrap">
            家でゴロゴロしてる時間ももちろん好きです。友達と話すだけの
            時間が実際は一番リラックスできてるかもしてません。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HobbiesAndInterests;
