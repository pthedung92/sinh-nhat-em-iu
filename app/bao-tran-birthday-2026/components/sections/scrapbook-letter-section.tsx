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
        <p className="font-[family-name:var(--font-be-vietnam-pro)] flex-1 text-base leading-relaxed text-slate-700">
          Công chúa của anh hôm nay cũng đã bước sang 1 tủi mới òiiiii, anh chúc em tuổi mới sẽ vẫn luôn vui vẻ như những ngày đầu mình nch với nhau nha và sẽ luôn tràn đầy sức khoẻeee 🥺 thật sự vợ cứ hay bị đau bụng và ói thật sự làm anh lo lắm áaa... Nhưng bên cạnh những điều đó cũm yêu anh nhìu hơn nữa nháaaaaa anh yêu em nhìu lắm áaaa. Anh cũng mong em sẽ thành công hơn nữa với những điều em đã chọn, anh sẽ luôn đồng hành cùng em cho dù có ra sao đi nữa và hãy luôn làm những điều em thấy thích và yêu thích nha. Đáng lẽ sẽ phải là 1 bức thư tay nhưng mà nay anh đã làm cho em 1 cái thiệp thiệt là đẹp ùi nèee. Em có muốn nói dì hay làm dì lúc này hong... Anh thì có á, thật sự với anh bây giờ như 1 giấc mơ vậy á... Có thể được cùng em làm những điều đơn giản như đi ăn, đi chơi, đi dạo và anh cảm thấy rất vui vì những điều đó. Thật sự vợ đã thay đổi anh rất nhiều á từ cách sống, cách giao tiếp và phải chú ý tới nhiều thứ hơn, anh cảm ơn em nhìu lắm lung áaa... Anh biết anh hong có được hoàn hảo lúm nhưng mà anh hứa anh sẽ thay đổi vì em nên là vợ kiên nhẫn 1 xíu để anh thay đổi nhaaa 🥺 thật sự anh thương em nhìu làm á. Có mấy lúc em cọc với anh, anh biết là anh đã vô lý với em nhìu chuyện, cho anh xin lỗi nha, nhiều lúc nói chuyện có thể anh ăn nói hong đc tốt nên làm vợ hiểu lầm... Và có mấy lúc anh nhõng nhẽo vì đi làm về mệt chỉ là anh mún ôm vợ và đc vợ an ủi xoa đầu hui 🥺. Nhưng mà nếu anh có làm dì khiến vợ hong thích thì vợ hay nói nhee, anh sẽ cố thay đổi và cải thiện thêm nhiều điều về bản thân mình. Và anh sẽ cố gắng nhìu hơn nữaaa và phát triển bản thânnn vì anh thật sự muốn trong mọi tương lai của anh luôn có em bên cạnh... Điều anh mong muốn nhất là có thể được ở bên em, có thể chăm sóc cho em, lo cho em nhiều thứ và cả ba mẹ nữa, có lẽ đó giờ anh ko nhận ra việc mình đã hơi xa cách với ba mẹ cho tới khi anh gặp được em. Em đã cho anh thấy được sự ấm áp của những bữa cơm tuy nó đơn giản nhưng mà thật sự anh đã ăn rất ngon. Anh thật sự rất muốn cưới em và anh thương em rất nhiều. Vợ hãy cho anh 1 cơ hội để anh cố gắng nhìu hơn nữa để có thể có 1 tương lai với nhau nha. Anh yêu em nhất trên đời💕.
          <span className="mt-2 block text-violet-500">
            Thế Dũng - anh iu của em ✎
          </span>
        </p>
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
