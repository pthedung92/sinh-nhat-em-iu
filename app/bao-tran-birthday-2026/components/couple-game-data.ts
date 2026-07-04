/** Mini-game sinh nhật Bảo Trân — mỗi ô bánh xe = một đề mục. */

export const WHEEL_GAMES = [
  {
    id: "q1",
    short: "Kỷ niệm\nđầu tiên",
    title: "Kỷ niệm đầu tiên",
    question:
      "Kể lại lần đầu tiên chúng ta gặp nhau từ góc nhìn của em/anh. Điều gì làm em/anh nhớ nhất?",
  },
  {
    id: "q2",
    short: "Sự thật\nchưa nói",
    title: "Sự thật chưa từng nói",
    question:
      "Hãy nói một điều em/anh chưa từng nói với đối phương, miễn là đó là sự thật.",
  },
  {
    id: "q3",
    short: "Khoảnh khắc\nhạnh phúc",
    title: "Khoảnh khắc hạnh phúc nhất",
    question:
      "Nếu chỉ được giữ lại một kỷ niệm của chúng ta, em/anh sẽ chọn khoảnh khắc nào? Vì sao?",
  },
  {
    id: "q4",
    short: "Tự hào\nnhất",
    title: "Điều khiến em/anh tự hào nhất",
    question:
      "Trong suốt thời gian bên nhau, điều gì ở đối phương khiến em/anh cảm thấy tự hào nhất?",
  },
  {
    id: "q5",
    short: "Rung động",
    title: "Điều khiến em/anh rung động",
    question:
      "Điều gì ở đối phương khiến em/anh thích nhất ngay từ đầu? Và bây giờ điều đó có còn không?",
  },
  {
    id: "q6",
    short: "Nhớ nhất\nđiều gì?",
    title: "Nhớ nhất điều gì?",
    question:
      "Trong những lần chúng ta ở bên nhau, đâu là khoảnh khắc em/anh nhớ nhất?",
  },
  {
    id: "q7",
    short: "Muốn\ncảm ơn",
    title: "Điều muốn cảm ơn",
    question:
      "Hãy nói 3 điều em/anh biết ơn vì đối phương đã làm cho mình.",
  },
  {
    id: "q8",
    short: "Điều ước\nhai đứa",
    title: "Điều ước cho hai đứa",
    question:
      "Hãy nói một điều ước dành cho mối quan hệ của chúng ta trong năm tới.",
  },
  {
    id: "q9",
    short: "Điều\nem/anh sợ",
    title: "Điều em/anh sợ",
    question:
      "Điều gì khiến em/anh lo lắng nhất về mối quan hệ của chúng ta?",
  },
  {
    id: "q10",
    short: "Gửi tương\nlai",
    title: "Gửi bản thân trong tương lai",
    question:
      "Hãy nói một lời nhắn gửi dành cho hai chúng ta của sau này.",
  },
  {
    id: "q11",
    short: "Ảnh\nyêu thích",
    title: "Bức ảnh yêu thích",
    question:
      "Nếu chỉ được giữ lại một tấm ảnh chung, em/anh sẽ chọn tấm nào? Hãy kể câu chuyện phía sau.",
  },
  {
    id: "q12",
    short: "Điều nhỏ\nđặc biệt",
    title: "Điều nhỏ nhưng đặc biệt",
    question:
      "Một hành động rất nhỏ của đối phương nhưng luôn khiến em/anh thấy hạnh phúc là gì?",
  },
  {
    id: "q13",
    short: "Điều\nhọc được",
    title: "Điều học được",
    question:
      "Yêu đối phương đã giúp em/anh trưởng thành hơn ở điểm nào?",
  },
  {
    id: "q14",
    short: "Điểm đến\nmơ ước",
    title: "Điểm đến mơ ước",
    question:
      "Em/anh muốn cùng đối phương đi đâu nhất trong tương lai?",
  },
  {
    id: "q15",
    short: "Tin nhắn\nđáng nhớ",
    title: "Tin nhắn đáng nhớ",
    question:
      "Có tin nhắn nào của đối phương mà em/anh vẫn nhớ đến bây giờ không?",
  },
] as const;

export type WheelGameId = (typeof WHEEL_GAMES)[number]["id"];

export function pickWheelIndexExcluding(
  segmentCount: number,
  exclude: number | null,
): number {
  if (segmentCount <= 1) return 0;
  let i = Math.floor(Math.random() * segmentCount);
  let guard = 0;
  while (exclude !== null && i === exclude && guard < 30) {
    i = Math.floor(Math.random() * segmentCount);
    guard++;
  }
  return i;
}
