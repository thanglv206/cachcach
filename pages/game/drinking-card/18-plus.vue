<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Drinking Card 18+',
  headerBack: true,
  headerInfo: true
})

const isFlipped = ref(false)
const currentIndex = ref(0) // Track current card index
const cardTransform = ref('')
const isDragging = ref(false)

// Gesture State
let startX = 0
let startY = 0
let currentX = 0
let currentY = 0

const challengesOriginal = [
  "Uống một ly nếu bạn thích trong lúc make love gọi hay được gọi là daddy",
  "Tất cả cùng chọn giữa trái đào và tâm hồn bên nào số người chọn ít hơn thì uống 1 ly",
  "Uống một ly nếu bạn thích chơi trò cosplay trên giường",
  "Cùng uống một ly với những người hiểu nghĩa từ CIA",
  "Những người từng xem phim hành động Nhật trước năm lớp 10 thì uống đi nào",
  "Bạn có thích mặc hoặc nhìn đồ lọt khe không? Nếu có thì hãy uống một ly cho sự sexy này nào",
  "Cùng nhau làm một ly với những người biết truyền thuyết “thịt kho trứng”",
  "Uống một ly nếu bạn từng có suy nghĩ “về nhà nghỉ” với ai đó ra trong lần gặp mặt đầu tiên",
  "Bạn có từng quên mặc đồ nhỏ khi ra ngoài không? Nếu có thì hãy uống một ly và chia sẻ cùng mọi người đó là đồ gì nào",
  "Uống một ly nếu bạn thích nude trong khi ngủ. Cảm giác ngủ nude thế nào bạn nhỉ?",
  "Những ai đã từng lặng lẽ xóa lịch sử truy cập trên google sau khi xem phim hành động thì uống nào",
  "Nếu bạn từng có ý định nhuộm đỏ thanh gươm của mình thì uống đi vì sự mạnh mẽ của mình nào",
  "Uống một ly nếu bạn từng một lần hì hục dọn cỏ nơi bí ẩn",
  "Uống một ly nếu bạn từng nhảy nhót trong nhà with body không mảnh vải",
  "Uống một ly nếu ngoài nhóm máu A, O, AB, B bạn còn có S hay M",
  "Uống một ly nếu bạn từng có ý định chơi lớn “public”",
  "Làm một ly nếu bạn đã thử làm nơi khác thay vì trên giường",
  "Bạn có thích dirty talk không? Nếu có thì hãy kể những từ bạn thích, còn ngại ngùng không kể hoặc không thích thì uống một ly đi nào.",
  "Tất cả cùng chọn giữa kỹ năng và kích thước bên nào số người chọn nhiều hơn thì uống 1 ly",
  "Nói nhỏ vào tai người bên trái bạn trong 30s, nếu người lắng nghe cười thì phải uống một ly còn nếu không bạn sẽ phải uống một ly",
  "Dùng ngón tay vẽ vòng tròn vào lòng bàn tay người ngồi bên phải bạn và nói những lời ngọt ngào đi nào không làm được thì uống một ly",
  "Uống một ly nếu bạn từng \"nhầm\" đường vào",
  "Tất cả cùng chọn giữa yêu truyền thống và yêu từ sau, bên nào số người chọn ít hơn thì uống 1 ly",
  "Uống một ly nếu bạn từng lặng lẽ đo kích thước cậu em hay tâm hồn của mình với bạn bè",
  "Uống một ly nếu bạn từng muốn đi “cửa sau” thay vì “cửa trước”",
  "Ai xem phim sẽ 4 lần/tháng th uống ngay đi nào",
  "Nụ hôn như thế nào khiến bạn cảm thấy tâm hồn nhộn nhạo, hừng hực? Nếu không chia sẻ được thì uống một ly thôi",
  "Uống một ly nếu bạn từng mở tab ẩn danh để tìm kiếm những chuyện nhạy cảm trên google",
  "Uống một ly nếu bạn từng một lần cắt móng tay ở ngón trỏ và ngón giữa vì một mục đích ướt át nào đó",
  "Nếu bạn đã từng có một giấc mơ ướt át hay nồng cháy khi ngủ thì uống một ly đi nào Hẳn là bạn không muốn dậy sau khi mơ thế lắm nhỉ?",
  "Bạn có thích được “đè đầu cưỡi cổ” theo đúng nghĩa đen không? Nếu có thì xứng đáng uống một ly",
  "Uống một ly nếu bạn từng mạnh mẽ không mở tab ẩn danh để xem những điều trong tối",
  "Uống một ly nếu bạn từng đứng trước gương khi nude và tự thấy bản thân thật ngon nghẻ",
  "Uống một ly nếu bạn đã từng mặc hoặc muốn người yêu mình mặc áo của mình",
  "Uống một ly nếu bạn từng nói đừng mà nhưng trong tâm thì không nghĩ thế",
  "Uống một ly nếu bạn muốn hoặc đã sở hữu món đồ chơi sẽ",
  "Kể nhanh 3 kiểu “rên” bạn thường dùng đi nào không kể được phải uống một ly thôi",
  "Gọi tên 3 tư thế bạn yêu thích khi make love, nếu không kể được thì uống một ly",
  "Uống một ly nếu bạn từng có mong muốn quay lại video lưu giữ kỉ niệm khi sẽ",
  "Bạn có thích “make love” trước gương không? Nếu có thì uống một ly đi nào",
  "Uống một ly nếu bạn say mê nhìn đối phương “tự vui” trước mặt mình",
  "Uống một ly cho sự mạnh mẽ của bạn nếu bạn đã từng làm hơn 3 hiệp một ngày",
  "Bạn đã từng có ý định rủ crush của mình đi xem phim vì ở đó không gian tối chưa? Rồi thì uống một ly đi nào",
  "Bạn đã từng lần nào chân run, giọng khàn sau một đêm không Có rồi thì xin chúc mừng bạn uống một ly thôi nào",
  "Tất cả cùng chọn giữa phim hành động Nhật và phim hành động Âu Mỹ bên nào số người chọn ít hơn thì uống 1 ly",
  "Bạn nhận xét mình là người ngoan hay hư khi cửa phòng vừa đóng? Không biết thì uống một ly thôi nào",
  "Bạn đã từng hôn thật sâu ở nơi công cộng chưa? Rồi thì uống một ly đi nào",
  "Uống một ly nào bạn từng “làm gì đó” với người yêu bạn khi người yêu bạn đang gọi điện thoại",
  "Bạn muốn để tay mình vào vị trí nào của đối phương khi hôn? Không trả lời được thì uống một ly",
  "Giữa dâm đãng và lolita bạn thích kiểu nào khi đóng cửa phòng hơn? Không trả lời được thì uống một ly",
  "Liếm vào tai người ngồi bên trái bạn hoặc là uống 3 ly",
  "Nhảy lapdance với người ngồi đối diện bạn, nếu không nhảy thì hãy hôn vào cổ người đó nhé",
  "Bạn đã từng có ý tưởng “nhấp nhô từng nhịp” trên xe ô tô chưa? Nếu chưa có thì uống một ly đi thôi",
  "Nếu bạn đã từng chọn “làm lành chữa tình” sau khi cãi nhau với người yêu thì uống một ly đi.",
  "Ban đã từng giả vờ say để làm “thóc” lần nào chưa? Nếu rồi thì uống một ly vì khả năng diễn xuất của bạn nào",
  "Bạn sẽ chọn chia tay hay tiếp tục yêu nếu bạn nhận ra người yêu mình không đáp ứng được chuyện ‘chăn gối màn” của mình? Nếu không trả lời được thì uống một ly thôi",
  "Nói thật đi nào, chuyện “chăn gối màn” chiếm bao nhiêu % trong tình yêu của bạn? Trả lời hoặc uống một ly nhé",
  "Bạn từng “make love” lâu nhất là bao nhiêu phút? Nếu muốn giữ bí mật này cho người yêu bạn tự bật mí thì uống một ly thôi",
  "Bạn đã từng “make love” nhiều nhất mấy lần trong một ngày? Kể lại cảm xúc của bạn sau khi đã “điên cuồng như thế đi? Kể được thì cả bàn uống 1 ly, không kể được thì bạn uống 1 ly.",
  "Nắm tay người ngồi cạnh bạn trong 10 phút không được bỏ ra trong bất kỳ trường hợp nào. Nếu bỏ tay ra thì uống ngay 3 ly",
  "Nếu bạn từng thử “vượt rào” khám phá những bí ẩn về cơ thể người khi đang ngồi trên ghế nhà trường thì uống một ly vì sự manh động này nào (phải đủ 18 tuổi mới nên làm bạn nhé)",
  "Chỉ định một người bạn thích hickey lên vai phải của bạn đi. Nếu không làm được thì uống hai ly nào.",
  "Bạn đã từng hôn môi một ai đó mà người này không phải là người yêu bạn chưa? Nếu đã từng thì uống một ly đi nào.",
  "Hãy dùng miệng cởi một món đồ bất kỳ (đồng hồ, vòng tay, một cái cúc áo…) trên người ngồi phía bên trái bạn. Uống một ly nếu bạn không làm được",
  "Kể về nội dung bộ phim “sẽ” bạn mới xem gần đây nhất. Nếu không kể được hoặc không có thì uống một ly đi thôi.",
  "Bạn và người đối diện hãy cùng cắn một miếng khoai tây từ hai đầu. Nếu khoảng dư còn lại lớn hơn 2 cm thì hai bạn mỗi người phải uống một ly rượu.",
  "Ngoài giường ra thì nơi nào là nơi bạn mong muốn được cùng người ấy “make love”. Nếu kể được 3 chỗ thì bạn sẽ không phải uống ly nào.",
  "Hãy mặt đối mặt, mũi chạm mũi với người ngồi bên phải bạn trong 30 giây, nếu không làm được thì uống ngay một ly đi nào.",
  "Chia sẻ 2 quan điểm của bạn về “sex toy” đi. Nếu ngại ngùng quá không chia sẻ được thì uống một ly để bù nào.",
  "Hãy nhắm mắt và hôn vào má một người bất kỳ mà được cả bàn chọn và đoán đó là ai, nếu đoán sai thì bạn phải uống một ly thôi nào.",
  "Trải nghiệm tệ nhất của bạn khi “sẽ” là gì? Nếu chưa có hoặc không thể tâm sự thì uống một ly đi thôi.",
  "Bạn đã bao giờ chọn “làm lành để chữa tình” với một người lạ khi vừa kết thúc một quan hệ chưa? Nếu không trả lời thì uống thôi, chuyện này không được làm bậy đâu nhé",
  "Liếm vào lòng bàn tay người ngồi cách bạn một người về phía bên trái trong vào 30s, nếu không làm được thì uống một ly",
  "Bạn đã từng “make love” with someone you don't have feelings for? If so, drink one glass now.",
  "Bạn đã từng có mong được được “make love” với người yêu cũ của mình sau khi hai người chia tay chưa? Nếu có rồi thì uống một ly cho sự “suy” của bản thân thôi.",
  "Bạn thích “chơi trần mặc kệ mưa ướt” hay là an toàn “áo mưa tận gốc”. Nếu bạn thích áo mưa thì uống một ly chúc mừng cho sự cẩn thận của bạn",
  "Bạn đã từng “make love” sau khi dùng chất kích thích như rượu, bia,... chưa? Cảm giá thế nào? Nếu không chia sẻ được thì uống ngay một ly",
  "Nếu phải chọn một người ở trên bàn này đúng gu để yêu của bạn nhất thì đó là ai? Không chọn được thì uống một ly đi nào",
  "Một người như thế nào có thể khơi gợi cho bạn cảm giác “muốn được về nhà nghỉ”. Nếu không chia sẻ rõ ràng thì uống ngay một ly",
  "Bạn đã bao giờ cố tình sạch sẽ thơm tho từ trong ra ngoài vì biết buổi hẹn hò ấy có thể tiến sâu và xa hơn chưa? Nếu có rồi thì uống một ly đi nào",
  "Hãy nhìn thẳng vào mắt người ngồi bên phải bạn và vuốt ve đôi môi của người ấy trong vòng 30s. Nếu bạn bật cười bạn sẽ phải uống một ly",
  "Bạn đã bao giờ nhìn vào mông hay ngực người đối diện trước khi nhìn mặt người ấy không? Nếu có rồi thì uống một ly đi thôi",
  "Nếu muốn gạ tình một ai đó bạn sẽ làm như thế nào? Bật mí ngay hoặc bạn phải uống một ly",
  "Ngồi vào lòng một người được cả bàn chỉ định (nữ ngồi vào lòng nam). Nếu không thực hiện được thì uống một ly",
  "Mô tả bằng hành động một tư thế mà bạn thích nhất. Nếu không làm được thì uống ngay một ly",
  "Hành động nào có thể khiến bạn tụt hứng khi “make love” nhất. Chọn chia sẻ hoặc uống một ly nhé",
  "Uống một ly nếu bạn có thích oral sex",
  "Thời gian ngắn nhất từ khi bạn yêu đến khi bạn “make love” là bao lâu? Nếu ngắn hơn 10 ngày thì uống một ly thôi",
  "Có ai trong nhóm này khiến bạn muốn được một lần “thử yêu” hay không? Bạn chỉ cần trả lời có hoặc không mà thôi, còn nếu chọn im lặng thì uống một ly",
  "Bạn nghĩ thế nào nếu người yêu bạn từng là một “bad girl, bad boy” tình trường kéo dài? Uống một ly nếu bạn không chịu chia sẻ",
  "Uống một ly nếu bạn từng “make love” 1 tiếng/1 hiệp",
  "Uống một ly nếu bạn thích được hoặc bị vỗ mông",
  "Uống một ly nếu bạn thích được đóng vai khi trên giường",
  "Kể về một thể loại phim hành động Nhật hoặc hành động Mỹ bạn thích xem nhất. Không có hoặc không kể được thì uống một ly",
  "Hình mẫu lý tưởng về sự sexy, quyến rũ của bạn là như nào? Chia sẻ hoặc uống một ly",
  "Bạn đã từng bao giờ yêu một ai đó chỉ vì tình dục hay không? Không chia sẻ được thì uống một ly đi nào",
  "Bạn nghĩ thế nào về tình yêu không có tình dục? Chia sẻ hoặc uống một ly",
  "Uống một ly nếu bạn thích một mối quan hệ nhưng không có tình yêu",
  "Một lần “make love” khiến bạn nhớ mãi là gì? Uống một ly hoặc chia sẻ",
  "Uống một ly nếu bạn biết thiendia là gì",
  "Bạn và hai người bên cạnh hãy cùng chơi trò chuyền giấy ăn bằng miệng, lưu ý tờ giấy ăn phải được giữ phẳng phiu. Nếu không chuyền được hai vòng thì cả ba phải uống một ly",
  "Bạn thích được đối phương khen ngợi như thế nào khi “make love”. Chia sẻ hoặc uống một ly thôi nào",
  "Uống một ly nếu bạn không ngại việc oral sex",
  "Uống một ly nếu bạn tự cảm thấy mình là một người giỏi trong việc oral sex",
  "Uống một ly nếu bạn từng quẹt tinder để tìm kiếm một mối quan hệ không có tình yêu",
  "Uống một ly nếu bạn từng nhắn tin tán tỉnh hơn hai người",
  "Một trải nghiệm tệ hại của bạn khi “make love” là gì? Chia sẻ hoặc uống một ly"
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

// Shuffled challenges
const challenges = ref<string[]>([])

const currentChallenge = computed(() => challenges.value[currentIndex.value])

const toggleFlip = () => {
  if (!isFlipped.value) {
    isFlipped.value = true
  }
}

const handleTouchStart = (e: TouchEvent) => {
  if (!isFlipped.value) return 

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
  
     // Tinder-like rotation: more drag X = more rotation
     const rotate = deltaX * 0.05 

     cardTransform.value = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const threshold = 100 // Pixel distance to trigger "swipe"
  
  if (Math.abs(currentX) > threshold) {
    // Swipe Triggered (Left or Right -> Next)
    // Fly off screen in the direction of the swipe
    const flyX = currentX > 0 ? 1000 : -1000 // Fly right or left
    const flyY = currentY > 0 ? 500 : -500 // Some vertical movement
    const flyRotate = currentX > 0 ? 45 : -45

    cardTransform.value = `translate(${flyX}px, ${flyY}px) rotate(${flyRotate}deg)`
    
    // Wait for animation then reset
    setTimeout(() => {
        nextCard()
    }, 300)
  } else {
    // Reset (Snap back)
    cardTransform.value = ''
    currentX = 0
    currentY = 0
  }
}

const nextCard = () => {
  // 1. Hide card (reset flip to cover)
  isFlipped.value = false
  
  // 2. Reset position (instant, but after flip starts hiding content)
  setTimeout(() => {
    cardTransform.value = '' // Clear transform
    currentX = 0
    currentY = 0
    // 3. Update content
    currentIndex.value = (currentIndex.value + 1) % challenges.value.length
  }, 300)
}

// Ensure tour shows only once per session (reload resets this state)
const hasSeenTour = useState('hasSeenFlipCardTour', () => false)
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
  if (!hasSeenTour.value) {
    showTour.value = true
  }
  // Shuffle challenges on mount
  challenges.value = shuffleArray(challengesOriginal)
})
</script>

<template>
  <div class="flex-1 flex justify-center items-center py-24 px-4 relative"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <!-- Remove overflow-hidden from container to prevent clipping 3D box -->
    <div class="card-container" 
         :class="{ flipped: isFlipped, dragging: isDragging, 'z-40': showTour && tourStep === 1 }" 
         :style="{ transform: isFlipped ? cardTransform : '' }"
         @click="toggleFlip">
      <div class="card-inner">
        <!-- Front Side (Cover) -->
        <div class="card-front relative flex flex-col items-center justify-center p-8 text-center bg-[#18181b] text-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/5">
          
          <!-- Decorative Corners -->
          <div class="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#ef4444] rounded-tl-2xl opacity-80"></div>
          <div class="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#ef4444] rounded-br-2xl opacity-80"></div>
          <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#ef4444] rounded-tr-2xl opacity-80"></div>
          <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#ef4444] rounded-bl-2xl opacity-80"></div>

          <!-- Fire Icon Circle -->
          <div class="relative w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-[#ef4444] to-[#991b1b] flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]">
             <div class="absolute inset-0 rounded-full bg-white/10 blur-md"></div>
             <!-- Fire SVG -->
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white drop-shadow-md relative z-10">
                <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
              </svg>
          </div>

           <h2 class="text-4xl font-bold text-white mb-2 tracking-tight">Cạch Cạch</h2>
           <p class="text-white/40 text-sm font-light tracking-wide mt-2">Chạm để lật thẻ</p>
        </div>

        <!-- Back Side (Content) -->
        <div class="card-back flex flex-col items-center justify-between p-8 text-center bg-[#18181b] text-white rounded-[2rem] shadow-lg border border-[#ef4444]">
           <!-- Title -->
           <div class="mt-4">
              <h3 class="text-[#ef4444] font-bold tracking-widest text-sm uppercase mb-2">Drinking Card 18+</h3>
           </div>

           <!-- Content -->
           <div class="flex-1 flex items-center justify-center">
              <p class="text-xl md:text-2xl font-medium leading-relaxed px-4 select-none">
                {{ currentChallenge }}
              </p>
           </div>

           <!-- Footer Time -->
           <div class="mb-4 flex items-center gap-2 text-gray-400 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#ef4444]">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
              </svg>
              <span>Thời gian: Không giới hạn</span>
           </div>
        </div>
      </div>
    </div>

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
       
       <!-- Step 1 Instruction -->
       <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce mb-32 relative z-50">
           <p class="text-white text-xl font-bold mb-4">Chạm vào thẻ bài để xem nội dung</p>
           <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#ef4444]" />
       </div>

       <!-- Step 2 Instruction -->
       <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
           <p class="text-white text-xl font-bold mb-8">Quẹt trái hoặc phải để sang thẻ khác</p>
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

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  /* Default transition for flipping */
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

/* When dragging, we want direct control (no transition lag) */
.card-container.dragging .card-inner,
.card-container.dragging {
  transition: none !important;
}

/* Also apply transition to the container for the swipe snap-back/fly-off, 
   BUT ONLY when NOT dragging. */
.card-container {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease-out; /* Smooth swipe return/exit */
}

.card-container.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1.5rem; /* rounded-2xl matches tailwind */
}

.card-back {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  /* Ensure hardware acceleration */
  transform-style: preserve-3d;
  will-change: transform;
}

/* When NOT flipped (showing Front) */
.card-container:not(.flipped) .card-front {
  z-index: 10;
}
.card-container:not(.flipped) .card-back {
  z-index: 0;
}

/* When flipped (showing Back) */
.card-container.flipped .card-front {
  z-index: 0;
}
.card-container.flipped .card-back {
  z-index: 10;
}
</style>
