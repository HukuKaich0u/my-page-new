const MyCareer = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-col items-center">
        <div className="text-left w-[500px]">
          <h1
            className="text-2xl bg-gray-700 w-[150px] text-center p-1
            rounded font-bold"
          >
            My Career
          </h1>
          <p className="my-4">
            現状書けることが少なすぎるので、ここから頑張ります
          </p>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>2020 - 2023 東京都立日比谷高等学校 / 硬式野球部</p>
          </div>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>高校卒業後、駿台お茶の水3号館にて1年間の浪人</p>
          </div>
          <div className="flex m-1">
            <p className="mr-1">⚫︎</p>
            <p>2024 〜 東洋大学情報連携学部情報連携学科</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCareer;
