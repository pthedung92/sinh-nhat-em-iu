"use client";

import { motion } from "framer-motion";
import { fadeUp, PLACEHOLDER_IMG } from "../constants";
import { hl } from "../doodles";
import { PhotoFrame } from "../photo-elements";

export function ScrapbookLetterSection() {
  return (
    <motion.section
      custom={2}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative rounded-3xl border-2 border-slate-800/10 bg-white/92 p-6 shadow-[8px_8px_0_rgba(15,23,42,0.07)] lg:col-span-2"
    >
      <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-violet-500">
        Happy Birthday {hl("Bảo Trân", "bg-violet-100")}
      </h2>
      <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="font-[family-name:var(--font-be-vietnam-pro)] flex-1 space-y-4 text-base leading-relaxed text-slate-700">
          <p>Gửi công chúa của anh ❤️</p>
          <p>
            Công chúa của anh hôm nay cũng đã bước sang một tuổi mới rồi nèeee.
            🥺 Anh chúc em tuổi mới sẽ luôn vui vẻ như những ngày đầu mình nói
            chuyện với nhau nha, luôn cười thật nhiều, luôn tràn đầy sức khỏe và
            mọi điều tốt đẹp nhất sẽ đến với em.
          </p>
          <p>
            Thật sự mỗi lần em bị đau bụng hay ói là anh lo lắm luôn á... Anh
            chỉ mong em sẽ biết chăm sóc bản thân nhiều hơn một chút để lúc nào
            cũng khỏe mạnh. Và... yêu anh nhiều hơn nữa nhaaaa. 💕
          </p>
          <p>
            Đáng lẽ hôm nay sẽ là một bức thư tay, nhưng anh muốn dành tặng em
            một điều đặc biệt hơn, nên anh đã làm cho em một tấm thiệp nhỏ này.
            Anh mong rằng khi em xem đến đây, em sẽ cảm nhận được tất cả những
            điều anh muốn nói.
          </p>
          <p>
            Có những lúc anh chẳng biết phải nói gì, cũng chẳng biết phải làm
            sao để em có thể hiểu được lòng mình.
          </p>
          <p>
            Anh không hoàn hảo. Có lúc anh vụng về, có lúc vô lý, có lúc làm em
            buồn dù trong lòng anh chẳng hề muốn như vậy. Anh biết nhiều lần
            mình nói chuyện chưa khéo nên khiến em hiểu lầm. Có những lúc em cọc
            với anh, anh biết một phần là vì anh chưa đủ tinh tế. Anh xin lỗi em
            nhiều lắm nha.
          </p>
          <p>
            Nếu có điều gì anh làm khiến em không thích, đừng giữ trong lòng
            nhé. Hãy nói với anh, vì anh thật sự muốn thay đổi, muốn tốt hơn
            từng ngày, không chỉ vì bản thân mình mà còn vì người anh yêu nhất.
          </p>
          <p>
            Có những lúc anh nhõng nhẽo sau một ngày đi làm mệt mỏi. Thật ra lúc
            đó anh chỉ muốn được ôm vợ một chút, được vợ xoa đầu, được nghe em
            dỗ dành vài câu thôi là anh thấy mọi mệt mỏi đều tan biến rồi. 🥺
          </p>
          <p>
            Anh biết anh không giỏi thể hiện cảm xúc. Có nhiều điều anh giữ
            trong lòng vì không biết phải nói như thế nào. Nhưng thật lòng, anh
            vẫn luôn cố gắng từng chút một để những điều dịu dàng em dành cho
            anh sẽ không bao giờ trở nên vô nghĩa.
          </p>
          <p>
            Nếu có điều gì khiến em buồn, mong em hãy kiên nhẫn với anh thêm một
            chút nữa nha. Anh đang cố gắng từng ngày để trở thành một người tốt
            hơn, trở thành người mà em có thể yên tâm dựa vào.
          </p>
          <p>
            Anh không biết phải nói sao để em hiểu rằng anh thương em nhiều đến
            mức nào. Nhưng mỗi ngày trôi qua, tình cảm anh dành cho em lại lớn
            hơn một chút. Chưa từng nhỏ đi, chỉ có ngày càng nhiều hơn.
          </p>
          <p>
            Đối với anh, được gặp em là một trong những điều tuyệt vời nhất mà
            cuộc sống đã mang đến.
          </p>
          <p>Không đúng lúc, cũng chẳng đúng kế hoạch, nhưng lại đúng người.</p>
          <p>
            Em là người khiến anh cảm nhận được yêu, được thương, được trân
            trọng và được là chính mình. Em đã thay đổi anh rất nhiều, từ cách
            sống, cách giao tiếp cho đến việc biết quan tâm và để ý nhiều thứ
            hơn.
          </p>
          <p>
            Được cùng em đi ăn, đi chơi, đi dạo, làm những điều bình thường
            nhất... với anh lại giống như một giấc mơ vậy. Anh vui vì mình có
            thể cùng nhau tạo nên những kỷ niệm nhỏ bé ấy.
          </p>
          <p>
            Anh cũng sẽ luôn ủng hộ những điều em lựa chọn. Anh mong em sẽ thành
            công hơn nữa trên con đường của mình. Dù sau này có chuyện gì xảy
            ra, anh vẫn muốn là người đồng hành cùng em, ở phía sau cổ vũ em và
            nắm tay em bước tiếp.
          </p>
          <p>
            Điều anh mong muốn nhất là trong mọi tương lai của anh đều có em.
          </p>
          <p>
            Anh muốn được ở bên em, được chăm sóc em, được lo cho em và cả ba mẹ
            nữa. Anh muốn mỗi lần em mệt sẽ có anh ở đó. Mỗi lần em vui sẽ có
            anh cười cùng em. Mỗi lần em buồn sẽ có anh ôm em thật chặt.
          </p>
          <p>
            Và nếu một ngày nào đó đủ trưởng thành, đủ vững vàng, anh thật sự
            muốn cưới em.
          </p>
          <p>
            Anh biết lời hứa thì dễ nói, nhưng anh sẽ dùng thời gian và hành
            động để chứng minh. Chỉ mong em cho anh thêm một chút thời gian,
            thêm một chút kiên nhẫn để anh có thể trở thành phiên bản tốt nhất
            của chính mình.
          </p>
          <p>Cảm ơn em vì đã đến bên anh.</p>
          <p>Cảm ơn em vì đã yêu anh.</p>
          <p>
            Cảm ơn em vì đã khiến cuộc sống của anh trở nên đẹp hơn rất nhiều.
          </p>
          <p>Chúc mừng sinh nhật công chúa của anh. 🎂❤️</p>
          <p>
            Mong rằng đây sẽ chỉ là sinh nhật đầu tiên trong rất nhiều sinh nhật
            sau này mà anh được ở bên cạnh em.
          </p>
          <p>Anh yêu em❤️.</p>
          <span className="mt-2 block text-violet-500">
            Thế Dũng - anh iu của em ✎
          </span>
        </div>
        <div className="flex shrink-0 gap-2 lg:flex-col">
          <PhotoFrame
            src='/images/bao-tran-birthday/2026/bao-tran-12.jpg'
            alt="Letter collage 1"
            className="h-24 w-24"
          />
          <PhotoFrame
            src='/images/bao-tran-birthday/2026/bao-tran-13.jpg'
            alt="Letter collage 2"
            className="h-24 w-24"
          />
          <PhotoFrame
            src='/images/bao-tran-birthday/2026/bao-tran-14.jpg'
            alt="Letter collage 3"
            className="h-24 w-24"
          />
        </div>
      </div>
    </motion.section>
  );
}
