<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: '18+',
  headerBack: true,
  headerInfo: true
})

// Truth questions
const truthQuestions = [
  "Bạn đã “ngủ” với bao nhiêu người?",
  "Nụ hôn tồi tệ nhất của bạn là ai?",
  "Điều táo bạo nhất bạn đã làm về tình dục là gì? / Hành động tình dục kỳ lạ nhất mà bạn đam mê hoặc muốn thưởng thức?",
  "Nếu bạn phải hẹn hò với ai đó trong căn phòng này, đó sẽ là ai và tại sao?",
  "Nội dung bộ phim 18+ mà bạn thấy tệ nhất là gì?",
  "Từ nhỏ tới giờ “mập mờ” với bao nhiêu người rồi?",
  "Suy nghĩ như thế nào về tình yêu “phi công – máy bay”?",
  "Bạn nghĩ ai ở đây có vòng ba đẹp nhất?",
  "Bạn có bao giờ “làm chuyện ấy” khi đứng dưới vòi sen chưa?",
  "3 bộ phận nào trên cơ thể mà bạn muốn người yêu hôn nhất?",
  "Bạn đã bao giờ lừa dối người yêu của mình để tránh khỏi tình huống khó chịu chưa?",
  "Bạn đã bao giờ yêu thầm một giáo viên chưa?",
  "Lần have sex đáng nhớ nhất của bạn như thế nào?",
  "Bạn bao nhiêu tuổi khi bạn trao nụ hôn đầu tiên?",
  "Đồ lót của bạn màu gì?",
  "Bạn cảm thấy thế nào nếu yêu người \"cao tuổi\" - người hơn mình 1 giáp?",
  "Bạn đã hôn ai trong số những người bạn thân nhất của mình chưa?",
  "Vị trí yêu thích của bạn trên giường là gì?",
  "Điều gì ở đối phương đã đánh thức ham muốn của bạn?",
  "Bạn đã bao giờ nhận được một bức ảnh tự sướng khỏa thân chưa? Nó như thế nào?",
  "Khi đối tác cởi đồ, bộ phận bạn muốn chạm vào đầu tiên?",
  "Trong số tất cả mọi người trong nhóm, bạn nghĩ ai sexy nhất?",
  "Tư thế have sex mà bạn thích nhất là gì?",
  "Bạn nghĩ ai là người có thân hình đẹp nhất trong tất cả chúng ta?",
  "Nơi kỳ lạ nhất mà bạn đã từng làm tình là ở đâu?",
  "Tư thế have sex nào mà bạn cảm thấy kỳ lạ nhất?",
  "Bạn mô tả bản thân trên giường là người như thế nào?",
  "Điều gì bạn muốn nhưng không dám yêu cầu khi đang make love?",
  "Nếu phải sở hữu một món \"đồ chơi\" bạn muốn cái nào?",
  "Bạn thích tính cách ai nhất trong căn phòng này, và tại sao? Không tính người yêu bạn.",
  "Bạn đã từng làm gì để mình trở nên “sexy”?",
  "Bạn sẽ chọn một mối quan hệ hoang dã, nóng bỏng hay một mối quan hệ bình lặng và ổn định?",
  "Nếu bạn có một tuần để sống và bạn phải kết hôn với một người trong căn phòng này, đó sẽ là ai?",
  "Tình huống xấu hổ nhất khi bạn have sex là gì?",
  "Bạn thích đối tác của mình im lặng, hay bạn thích rên?",
  "Bạn nghĩa sao về cosplay khi se-x",
  "Nếu chọn giữa nhập vai làm giáo viên hay học sinh khi have sex, bạn chọn gì?",
  "Thể loại phim se-x bạn thích nhất là gì?",
  "Một tuần se-x mấy lần là lý tưởng nhất với bạn?",
  "Bạn đã bao giờ have sex trên giường của bạn cùng phòng chưa?",
  "Bạn muốn sử dụng đồ chơi nào trong khi have sex?",
  "Thời gian làm tình lâu nhất trong một lần quan hệ của bạn là?",
  "Hình ảnh nhạy cảm nhất mà bạn đã chụp là gì?",
  "Bạn có bao giờ muốn tham dự một bữa tiệc swingers không?",
  "Trong lòng bạn có một người nào mà bạn luôn giành một tình cảm đặc biệt cho họ nhưng cả hai không thể đi tới tình yêu?",
  "Món quà “khiêu gợi” nhất mà bạn sẽ tặng ai đó là gì?",
  "Món quà “khiêu gợi” nhất bạn muốn được tặng là gì?",
  "Bạn đã bao giờ có mối quan hệ không công khai chưa? Đến lúc công khai rồi đó!!!",
  "Bạn thích sử dụng lưỡi hay ngón tay hơn?",
  "Điều bạn thích nhất ở cơ thể người đối diện là gì?",
  "Bạn có muốn \"se-x\" ở nơi làm việc không?",
  "Kích thước có thực sự quan trọng?",
  "Bạn tình tồi tệ nhất của bạn như thế nào?",
  "Đâu là nơi rủi ro nhất mà bạn đã have sex?",
  "Bạn đã bao giờ quay phim sex chưa?",
  "Câu chuyện tình một đêm điên rồ nhất của bạn là gì?",
  "Phim người lớn kỳ lạ nhất trên danh mục bạn đã từng tìm kiếm?",
  "Nếu phải hôn 1 người khác giới trong bàn, bạn sẽ chọn ai?",
  "Điều gì ở một ai làm bạn cảm thấy “hưng phấn”?",
  "Bạn đã bao giờ làm điều đó trên ô tô chưa?",
  "Bạn đã từng thử se-x chỗ nào khác ngoài giường chưa?",
  "Một người yêu lý tưởng của bạn là có ngoại hình như nào?",
  "Làm tình trong vòng bao lâu là quá nhiều?",
  "Bạn đã bao giờ tưởng tượng đến việc quan hệ tay ba chưa?",
  "Điều gì khiến bạn thích nhất ở một cô gái/chàng trai?",
  "Bạn có thích chat “se-x” không?",
  "Lần cuối cùng bạn mơ thấy một giấc mơ “ướt” là khi nào? Nó diễn ra như thế nào?",
  "Bạn có kết hôn với một người hơn bạn rất nhiều tuổi không?"
]

// Dare challenges
const dareChallenges = [
  "Nhắm mắt và đoán bất cứ thứ gì 1 người đưa vào miệng bạn",
  "Ngậm viên đá bằng miệng và lướt một đường lên cổ người bên cạnh",
  "Kêu tất cả im lặng rồi rên một tiếng",
  "Vuốt tay từ đầu đến chân người đối diện",
  "Rên vào tai người bên trái của bạn.",
  "Giao điện thoại của bạn và cho phép nhóm gửi tin nhắn văn bản đến một người trong danh bạ của bạn mà họ chọn.",
  "Đăng một status theo yêu cầu của mọi người lên Facebook.",
  "Nói chuyện với cái lưỡi của bạn thè ra.",
  "Cho cả nhóm xem bức ảnh xấu hổ nhất của bạn.",
  "Chọn ai đó cạo nách của bạn bằng thìa.",
  "Dùng lưỡi viết một chữ lên không khí để mọi người cùng đoán.",
  "Đút thức ăn cho người bạn cùng giới, vừa đút vừa nói: “Em/ Anh yêu ơi hả miêng raaaaa\"",
  "Gửi tin nhắn cho người bạn bất kỳ: Đi ị chung hong? Tui đem giấy rồi nè",
  "Thò chân trần vào bồn cầu.",
  "Mặc quần lót bên ngoài quần dài.",
  "Liếm người ngồi phải của bạn",
  "Làm quen với người khác giới trong hai phút",
  "Hôn vào má bên phải của người đó (không bất kể giới tính nào) và nói rằng bạn yêu họ và bạn nghĩ họ quyến rũ",
  "Nhắm mắt và gửi tin nhắn cho một người được cả bàn chỉ định",
  "Mở trang web 18+ mà bạn yêu thích ngay bây giờ",
  "Mở video 18+ và bật loa to trong 10s",
  "Tạo một khuôn mặt hài hước, chụp ảnh tự sướng và đăng lên Story",
  "Gọi tất cả những người khác giới là vợ/chồng trong vòng 30p. Gọi sai 1 lần, uống 1 ly",
  "Đọc to một câu có 3 từ \"làm\", \"sướng\" và \"chảy nước\"",
  "Gửi biểu tượng quả cà tím hoặc trái đào cho một người chưa từng nói chuyện",
  "Hành động với người bên trái như người yêu trong vòng 15 phút",
  "Nhắm mắt lại, ngồi vào lòng ai đó và đoán xem đó là ai",
  "Thả một viên đá vào quần",
  "Gọi cho người yêu cũ và nói với họ lý do tại sao bạn lại chia tay họ",
  "Ăn dâu tây(bất cứ một loại quả nào) một cách gợi cảm nhất",
  "Hãy khoe một góc màu sắc đồ trong bạn đang mặc",
  "Cho phép những người chơi khác bịt mắt bạn và cố gắng đoán ba món ăn trong tủ đựng thức ăn chỉ bằng mùi",
  "Hãy làm điều gì đó mà bạn hằng mơ ước với tôi ngay bây giờ",
  "Đọc tin nhắn gợi tình cuối cùng mà bạn nhận được",
  "Bịt mắt và đi xung quanh bàn trong vòng 20 giây. Hết thời gian, hãy hôn người gần bạn nhất.",
  "Đội rổ rau lên đầu trong vòng 15 phút.",
  "Lần lượt ôm mọi người có mặt trong phòng.",
  "Viết một bức thư tình trong 10 từ hoặc ít hơn. Gửi đến một người lạ bất kì.",
  "Nhắm mắt và tô son cho người bên cạnh bạn trong 5 giây.",
  "Làm động tác \"meo meo\" của Trần Đức Bo với người bên phải bạn.",
  "Hãy diễn tả cách tán flirt của bạn.",
  "Bị bịt mắt và cù lét trong 15 giây. Đoán ai là người cù lét bạn",
  "Hãy để ai đó viết một từ lên trán bạn bằng son và giữ trong 30 phút.",
  "Thay đổi trạng thái Facebook của bạn thành \"Cảm thấy hứng tình . . . \"",
  "Mượn ai đó áo ngực và đeo lên mặt như Spider Man.",
  "Bạn phải đặt tay lên đùi trong của người bên cạnh trong hiệp tiếp theo",
  "Gọi cho người yêu cũ và nói với họ rằng bạn đang mang thai đứa con của họ",
  "Đăng một câu chuyện trên Instagram để cho mọi người biết rằng bạn đang tìm kiếm tình một đêm",
  "Hôn môi một người bạn bất kì",
  "Hôn vào cổ những người có chữ \"n\" trong tên.",
  "Múa bụng thật quyến rũ",
  "Sơn móng tay bằng tất cả những loại gel/sốt mà nhóm bạn có",
  "Gửi liên kết video 18+ gần đây nhất mà bạn đã xem cho năm người bạn ngẫu nhiên trên Facebook",
  "Thể hiện tư thế yêu thích của bạn trong phòng ngủ.",
  "Đưa một người khác giới về, sau khi kết thúc buổi nhậu.",
  "Chụp một bức ảnh selfie khêu gợi với một người khác trong phòng và đăng lên mạng xã hội.",
  "Nhẹ nhàng lướt ngón tay của bạn trên môi người khác và rên rỉ trong mười giây.",
  "Dùng miệng cởi đồ vật bất kỳ trên người được chỉ định",
  "Dùng miệng đút đồ ăn cho ai đó mà bạn thích",
  "Ngửi nách của một người bất kì",
  "Hôn say đắm một món đồ trong nhà bếp",
  "Chọn một người khác giới, nhìn thật sâu vào mắt họ trong khoảng 1 phút, khoảng cách gần khoảng 5cm.",
  "Gửi tin nhắn thoại quay lại với người yêu cũ bạn",
  "Unfriend người yêu/crush của bạn",
  "Ăn hết một miếng chanh trên bàn",
  "Xin info một người lạ được chỉ định",
  "Liếm vào tai một người mà bạn muốn",
  "Ôm chặt từ phía sau một người trong vòng 1 phút",
  "Mát xa chân cho người bên trái"
]

// Shuffle array helper
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

// Shuffled arrays
const shuffledTruths = ref<string[]>([])
const shuffledDares = ref<string[]>([])
const currentIndex = ref(0)

// Current questions
const currentTruth = computed(() => shuffledTruths.value[currentIndex.value] || truthQuestions[0])
const currentDare = computed(() => shuffledDares.value[currentIndex.value] || dareChallenges[0])

const flippedCard = ref<'truth' | 'dare' | null>(null)

const flipCard = (cardType: 'truth' | 'dare') => {
  if (!flippedCard.value) {
    flippedCard.value = cardType
  }
}

// Swipe gesture state
const cardTransform = ref('')
const isDragging = ref(false)
let startX = 0
let startY = 0
let currentX = 0
let currentY = 0

const handleTouchStart = (e: TouchEvent) => {
  if (!flippedCard.value) return 
  
  if (e.touches && e.touches.length > 0) {
    isDragging.value = true
    startX = e.touches[0]!.clientX
    startY = e.touches[0]!.clientY
  }
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return

  if (e.touches && e.touches.length > 0) {
    const x = e.touches[0]!.clientX
    const y = e.touches[0]!.clientY
  
    const deltaX = x - startX
    const deltaY = y - startY

    currentX = deltaX
    currentY = deltaY
  
    const rotate = deltaX * 0.05
    cardTransform.value = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const threshold = 100 
  
  if (Math.abs(currentX) > threshold) {
    const flyX = currentX > 0 ? 1000 : -1000
    const flyY = currentY > 0 ? 500 : -500
    const flyRotate = currentX > 0 ? 45 : -45

    cardTransform.value = `translate(${flyX}px, ${flyY}px) rotate(${flyRotate}deg)`
    
    setTimeout(() => {
      nextQuestion()
    }, 300)
  } else {
    cardTransform.value = ''
    currentX = 0
    currentY = 0
  }
}

const nextQuestion = () => {
  flippedCard.value = null
  
  setTimeout(() => {
    cardTransform.value = ''
    currentX = 0
    currentY = 0
    currentIndex.value = (currentIndex.value + 1) % truthQuestions.length
  }, 300)
}

const hasSeenTour = useState('hasSeenTruthOrDareTour', () => false)
const showTour = ref(false)
const tourStep = ref(1)

const nextTourStep = () => {
  if (tourStep.value < 2) {
    tourStep.value++
  } else {
    showTour.value = false
    hasSeenTour.value = true
  }
}

onMounted(() => {
  shuffledTruths.value = shuffleArray(truthQuestions)
  shuffledDares.value = shuffleArray(dareChallenges)
  
  if (!hasSeenTour.value) {
    showTour.value = true
  }
})
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center py-8 px-6" 
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <p v-if="!flippedCard" class="text-gray-400 text-base mb-8 text-center">Chọn một lá bài để bắt đầu!</p>

    <div class="w-full max-w-md mx-auto" :class="flippedCard ? '' : 'space-y-6'">
      <div 
        v-show="!flippedCard || flippedCard === 'truth'"
        class="card-wrapper"
        :class="{ 'is-flipped': flippedCard === 'truth', 'dragging': isDragging }"
        :style="{ transform: flippedCard === 'truth' ? cardTransform : '' }"
        @click="flipCard('truth')"
      >
        <div class="card-flipper">
          <div class="card-face card-front bg-gradient-to-br from-[#4a0a0a] to-[#2d0707] rounded-3xl p-6 shadow-2xl border border-red-900/30">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-fire-20-solid" class="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 class="text-[#ef4444] text-3xl font-black text-center mb-2 tracking-wide">THẬT</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#ef4444]">
            <div class="mt-4">
              <h3 class="text-[#ef4444] font-bold tracking-widest text-sm uppercase mb-2 text-center">Câu hỏi Thật 18+</h3>
            </div>
            <div class="flex-1 flex items-center justify-center min-h-[200px]">
              <p class="text-xl font-medium leading-relaxed px-4 select-none text-center text-white">
                {{ currentTruth }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        v-show="!flippedCard || flippedCard === 'dare'"
        class="card-wrapper"
        :class="{ 'is-flipped': flippedCard === 'dare', 'dragging': isDragging }"
        :style="{ transform: flippedCard === 'dare' ? cardTransform : '' }"
        @click="flipCard('dare')"
      >
        <div class="card-flipper">
          <div class="card-face card-front bg-gradient-to-br from-[#4a0a0a] to-[#2d0707] rounded-3xl p-6 shadow-2xl border border-red-900/30">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white">
                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 class="text-[#ef4444] text-3xl font-black text-center mb-2 tracking-wide">THÁCH</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#ef4444]">
            <div class="mt-4">
              <h3 class="text-[#ef4444] font-bold tracking-widest text-sm uppercase mb-2 text-center">Thử thách 18+</h3>
            </div>
            <div class="flex-1 flex items-center justify-center min-h-[200px]">
              <p class="text-xl font-medium leading-relaxed px-4 select-none text-center text-white">
                {{ currentDare }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
       <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce mb-32 relative z-50">
           <p class="text-white text-xl font-bold mb-4">Chọn 1 trong 2 lá bài Thật hay Thách</p>
           <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#ef4444]" />
       </div>
       <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
           <p class="text-white text-xl font-bold mb-8">Vuốt sang ngang để chuyển sang cặp bài mới</p>
           <div class="flex gap-12 items-center">
               <UIcon name="i-heroicons-arrow-left" class="text-4xl text-white/50 animate-pulse" />
               <UIcon name="i-heroicons-hand-raised" class="text-6xl text-[#ef4444] animate-wiggle" />
               <UIcon name="i-heroicons-arrow-right" class="text-4xl text-white/50 animate-pulse" />
           </div>
       </div>
       <div class="absolute bottom-12 text-white/40 text-sm">Chạm vào màn hình để tiếp tục</div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wiggle {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}
.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.card-wrapper {
  width: 100%;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.card-wrapper.dragging,
.card-wrapper.dragging .card-flipper {
  transition: none !important;
}

.card-wrapper:not(.is-flipped) .card-front {
  position: relative;
}

.card-wrapper:not(.is-flipped) .card-back {
  position: absolute;
  top: 0;
  left: 0;
}

.card-wrapper.is-flipped {
  aspect-ratio: 3/4;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}

.card-wrapper.is-flipped .card-front,
.card-wrapper.is-flipped .card-back {
  position: absolute;
  top: 0;
  left: 0;
}

.card-flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card-wrapper.is-flipped .card-flipper {
  transform: rotateY(180deg);
}

.card-face {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  will-change: transform;
}

.card-back {
  transform: rotateY(180deg);
}

.card-wrapper:not(.is-flipped):hover .card-front {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>
