const MyCareer = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-col items-center p-2 ">
        <div className="text-left sm:w-[500px]">
          <h1
            className="text-2xl bg-gray-700 w-[150px] text-center p-1
            rounded font-bold"
          >
            My Career
          </h1>
          <p className="my-3">
            現状書けることが少なすぎるので、ここから頑張ります
          </p>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>2017/4 - 2020/3 足立区立第十三中学校</p>
          </div>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>2020/4 - 2023/3 東京都立日比谷高等学校 / 硬式野球部</p>
          </div>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>2023/4 -2024/3 駿台御茶ノ水3号館にて1年間浪人</p>
          </div>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>2024/4 〜 東洋大学情報連携学部情報連携学科</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCareer;
