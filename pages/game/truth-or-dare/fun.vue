<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Vui vẻ',
  headerBack: true,
  headerInfo: true
})

// Truth questions
const truthQuestions = [
  "Điều xấu hổ nhất bạn đã làm khi say rượu là gì?",
  "Bạn đã từng stalk ai chưa? Vì sao?",
  "Bạn bao nhiêu tuổi khi bạn trao nụ hôn đầu tiên?",
  "Nếu bạn có thể thay đổi một thứ trong cơ thể mình đó sẽ là gì?",
  "Nếu phải hẹn hò với một người ở đây, bạn chọn ai?",
  "Bạn đã bao giờ lừa dối tình cảm của ai chưa và nó như thế nào?",
  "Điều ngu ngốc nhất mà bạn từng nói với người bạn thích là gì?",
  "Kể 3 điểm bạn cảm thấy bạn bị thu hút bởi người khác giới?",
  "Bạn không thích người yêu mình có những tật xấu nào? Kể 3 tật xấu",
  "Điều đau khổ nhất mà bạn đã tải lên mạng xã hội là gì?",
  "Bạn đã từng bị người yêu chia tay vì lý do kỳ lạ gì?",
  "Một điều mà bạn cảm thấy có lỗi trong mối quan hệ cũ của bạn (có thể tình yêu hoặc tình bạn)",
  "Lần cuối bạn khóc là khi nào? Vì sao?",
  "Một điều người khác thường đánh giá sai về bạn?",
  "Bạn đã xem pỏn năm bao nhiêu tuổi?",
  "Bạn đã bao giờ hẹn hò với ai đó chỉ vì tình dục?",
  "Bạn đã bao giờ chia tay ai đó vì se(x) không hợp chưa?",
  "Sắp xếp mọi người trong bàn nhậu theo thứ tự từ thích nhiều đến ít nhất!",
  "Mối tình ngắn nhất của bạn là bao nhiêu ngày? Và lí do chia tay?",
  "Gu 'chuối' của bạn là bao nhiêu cm nếu bạn là nữ và bạn mong muốn 'chuối' mình bao nhiêu cm nếu bạn là nam",
  "Ai là một người bạn bạn từng thân n hưng hiện tại không chơi chung nữa? Lí do cạch mặt là gì?",
  "Ai là người bạn thường xuyên nhắn tin nhất trong nhóm? Và ai là người bạn gần như chẳng bao giờ nhắn?",
  "Bạn vẫn còn cảm xúc với (những) người 'cũ' chứ? Nhớ bật mí tên họ luôn nhé!",
  "Bạn đã từng lừa dối người yêu cũ của mình điều gì?",
  "Nếu phải yêu một người đồng giới với bạn, bạn chọn ai trong nhóm?",
  "Bạn thích những đặc điểm cơ thể nào của người yêu?",
  "Kế tên tất cả những người bạn đã từng mập mờ?",
  "Người bạn thích nhất và người bạn ghét nhất đã bên nhau bạn hãy dùng từ để hình dung cặp đôi này",
  "Nếu phải quay lại với người yêu cũ bạn sẽ chọn ai?",
  "Điều gì bạn ghét nhất ở đối phương khi muốn tiến xa hơn trong mối quan hệ?",
  "Mối tình lâu nhất của bạn là bao nhiêu lâu? Tại sao lại chia tay?",
  "Điều lãng mạn nhất bạn từng làm là gì?",
  "Thời điểm bạn thấy đau khổ nhất là lúc nào?",
  "Động lực lớn nhất để bạn vượt qua mọi khó khăn là gì",
  "Đã bao giờ bạn nhớ bố mẹ nhớ nhà đến phát khóc chưa?",
  "Điểm khác biệt lớn nhất của bạn bây giờ và khi trước là gì? (Không bàn tới tuổi tác)",
  "Khi nào bạn nhận ra bạn đã yêu một ai đó?",
  "Bạn có thật sự can tâm bình thản chấp nhận thực tế và từ bỏ đi ước mơ của chính mình? Ước mơ ấy là gì?",
  "Bạn có muốn một mối quan hệ fwb không? Vì sao?",
  "Đã bao giờ bạn khóc nấc lên về một vấn đề nào đó chưa? Sẵn sàng share chứ?",
  "Bạn thấy biết ơn điều gì nhất trong cuộc đời bạn",
  "Kể ra 3 điểm tốt của người yêu cũ của bạn",
  "Lần tiêu tiền nhiều nhất của bạn cho lí do gì?",
  "Lần đầu tiên bạn kiếm được tiền từ chính sức lai động của mình là bao nhiêu? Công việc đó là gì?",
  "Một người bạn mà bạn không thể quên? Lí do?",
  "Kể ra việc ngu ngốc nhất bạn từng làm vì tình yêu",
  "Kể điều có lỗi nhất mà bạn đã từng làm với người dành tình cảm cho bạn",
  "Bạn đã từng bị ai đó chê chưa? Lý do là gì?",
  "Tật xấu lớn nhất của bạn là gì?",
  "Bạn có phải người nghiện skinship không?",
  "Tình huống khó chịu nhất mà bạn đã trải qua ở nơi công cộng là gì?",
  "Bạn đã từng cãi bạn bè để yêu ai đó chưa? Kết quả như nào?",
  "Thói quen/ hành động gì ở đối phương khiến bạn lập tức say bye? Vì sao?",
  "Bạn đã từng ở trong một mối quan hệ mà hai người đối xử như người yêu, nhưng chưa từng chính thức gọi tên hay công khai chưa?",
  "Điều tốt nhất mà người trong nhóm từng làm cho bạn là gì?",
  "Một câu nói quan trọng của của người bạn nào đó mà bạn vẫn nhớ? Đó là gì?",
  "Nếu có một cỗ máy thời gian bạn sẽ quay lại thời điểm nào trong lịch sử hoặc khoảnh khắc trong cuộc đời mình?",
  "Nụ hôn tồi tệ nhất của bạn là ai?",
  "Bạn nghĩ gì về việc yêu nhiều người cùng lúc?",
  "Bộ phận nào trên cơ thể mà bạn muốn người yêu hôn nhất?",
  "Cách tệ nhất mà bạn bỏ rơi ai đó là gì?",
  "Bạn đã từng bị lừa tiền chưa? Và tại sao lại bị thế",
  "Bạn nghĩ tình dục chiếm bao nhiêu % trong tình yêu?",
  "Bạn có tin vào tình yêu từ cái nhìn đầu tiên không?Vì sao?",
  "Điều tốt nhất bạn đã làm trong cuộc sống của bạn là gì?",
  "Nỗi sợ lớn nhất của bạn bây giờ là gì?",
  "Khi bạn nổi giận thì bạn thường có kiểu hành xử như thế nào?",
  "Bạn cảm thấy điều gì là khó kiểm soát nhất?",
  "Bạn cảm thấy điều gì là kho chia sẻ với người yêu nhất?",
  "Thể loại phim 'se-x' nào bạn thích nhất?",
  "Khi bạn ốm và cảm thấy khốn khổ thì bạn muốn ở một mình hay muốn được chăm sóc và có ai đó ở bên? Và người bạn muốn ở bên là ai?",
  "Bạn đã từng yêu nhiều người một lúc chưa?",
  "Bạn có thường hay khóc? Và khóc trong những tình huống nào?",
  "Điều bạn hay làm khi thất tình?",
  "Khi nào bạn cảm thấy bạn sẵn sàng để cưới ai đó?",
  "Ngoại hình và tính cách mỗi thứ chiếm bao nhiêu % khi bạn thích ai đó?",
  "Điều gì khiến bạn cảm thấy nhớ nhà?",
  "So với cách đây 5 năm bạn nghĩ mình thay đổi theo hướng tốt lên hay tệ đi?",
  "Điều gì khiến bạn cảm thấy liên tục lo lắng?",
  "Bạn có thích một nụ hôn mạnh bạo không? Hay miêu tả nó",
  "Bạn có cố gắng giảm cân nếu người bạn đời của bạn yêu cầu?",
  "Tình yêu và công việc cái nào quan trọng hơn với bạn lúc này?",
  "Bạn thích nhận món quà đắt tiền hay là món quà thể hiện tình cảm nhưng rẻ tiền?",
  "Bạn thích sống một mình hay sống với người yêu? Vì sao?",
  "Những đặc điểm nào về ngoại hình của một ai đó khiến bạn bị thu hút?",
  "Bạn thấy mình có thể yêu người lớn hơn mình tối đa bao nhiêu tuổi thì vẫn thoải mái?",
  "Bạn có nhớ lần đầu tiên uống rượu của mình ko ? Hoàn cảnh lúc đó như thế nào?",
  "Lần gần đây nhất bạn se-x là bao giờ?",
  "Những mục tiêu trong cuộc hôn nhân của bạn?",
  "Bạn nghĩ sao về việc sống chung khi đang yêu nhau?",
  "Nếu gia đình bạn không chấp nhận người yêu của bạn, bạn sẽ làm thế nào?",
  "Với bạn một buổi hẹn hò tuyệt vời là như thế nào?",
  "Lần gần đây nhất bạn 'tự xử' là khi nào?",
  "Cuộc tranh cãi lớn nhất của bạn với gia đình là gì ? Vấn đề đó đã được giải quyết ổn chưa?",
  "Nếu gia đình bạn ghét người mà bạn đang hẹn hò và phản đối bạn cưới người ấy bạn có làm đám cưới với người đó không?",
  "Khi hẹn hò bạn nghĩ ai là người nên trả tiền cho buổi hẹn?",
  "Điều gì mà bạn cảm thấy thích nhất khi sống độc thân?",
  "Điều gì mà bạn thấy không thích khi sống độc thân?",
  "Cần phải đợi bao nhiêu thời gian là đủ để nói với ai đó là bạn yêu họ?",
  "Những sai lầm nào bạn thấy ở những cặp đôi khác mà bạn muốn chắc chắn sẽ không xảy ra trong cuộc tình yêu của bạn?",
  "Đã có ai đó làm điều gì đó đối với bạn khiến bạn không bao giờ tha thứ cho người đó không? Việc đó là gì vì sao bạn không thể tha thứ cho họ?",
  "Bạn đã từng có mối quan hệ với ai đó mà bạn ước là đừng có nó không?",
  "Bạn cần điều gì từ người bạn đời để cảm thấy cuộc hôn nhân này thật hạnh phúc",
  "Bạn từng có cuộc chia tay tồi tệ nào chưa? Tại sao nó lại tồi tệ?",
  "Làm thế nào mà bạn biết là khi nào thì bạn đang yêu?",
  "Mối quan hệ kéo dài nhất mà bạn có? Bạn có hối tiếc vì nó kéo dài quá lâu như vậy không?",
  "Khi nào bạn cảm thấy cần chia tay một ai đó",
  "Bạn đã yêu thích ai đó chỉ vì nhu cầu tình dục chưa?",
  "Lí do bạn ghost người gần đây nhất?",
  "Đã bao giờ bạn cảm thấy mình là một người không xứng trong mối quan hệ chưa? Lí do?",
  "Nếu không phải lo cơm áo gạo tiền thì ước mơ lớn nhất của bạn là làm việc gì?",
  "Chọn giữa người tình đầu và người yêu cũ gần đây nhất của bạn, bạn sẽ chọn ai?",
  "Điều điên rồ nhất bạn từng làm khi say là gì?",
  "Điều bạn tiếc nuối nhất trong năm cấp 3 của bạn?",
  "Điều điên rồ nhất bạn từng nghĩ đến nhưng không bao giờ thực hiện được là gì?",
  "Hành động gì của người yêu làm bạn khóc?",
  "Bạn có yêu ai đó chỉ vì họ theo đuổi bạn rất nhiều, rất kiên trì, khiến bạn mềm lòng không?",
  "Món quà bạn từng được nhận mà bạn trân trọng nhất",
  "Món quà bạn thích được tặng nhất là gì?",
  "Bạn đã bao giờ nhìn trộm ai đó khác giới chưa điều đó diễn ra như thế nào?",
  "Nếu phải chọn nhìn ngực và mông, bạn thích nhìn cái nào hơn vì sao?",
  "Điều luôn muốn nhưng chưa làm được",
  "Bạn thường chọn im lặng hay nói ra khi xảy ra xung đột",
  "Bạn thấy ai trong nhóm là người khó tâm sự chia sẻ nhất? Có muốn gửi gắm gì tới người đó không?",
  "Bạn thấy thoải mái nhất khi bên cạnh ai?",
  "Bạn dễ bị thu hút bởi người như thế nào?( trừ nhan sắc)",
  "Bạn có mối tình nào qua game không?",
  "Kích cỡ hay kĩ năng?",
  "Điều ích kỉ nhất bạn từng làm là gì?",
  "Bạn đã bao giờ khóc khi xem phim chưa? Đó là bộ phim nào?",
  "Bạn yêu điều gì nhất ở bản thân?",
  "Thời điểm nào bạn bị down mood nhất và bạn đã vượt qua như thế nào?",
  "Bạn đã bao giờ trốn học chưa lí do là gì?",
  "Bạn đã bao giờ viết bản kiểm điểm chưa lí do là gì?",
  "Bạn đã bao giờ sử dụng chất gây nghiện chưa?",
  "Ban đã bao giờ bị bạo lực học đường chưa?",
  "Một người mà bạn thấy đáng ghét thường có đặc điểm gì?",
  "Một điều bạn không thích ở người khác giới?",
  "Bạn có phải người yêu vì nhan sắc không? Vì sao?",
  "Kể về lần gần nhất bạn bị bố hoặc mẹ đánh",
  "Bạn nghĩ gì về việc bạn trai chi trả tất cả tiền khi hẹn hò?",
  "Một tình yêu thật lòng thường có những đặc điểm gì?",
  "Khoảnh khắc nào khiến bạn muốn nói ra lời chia tay nhất?",
  "Trong tình yêu bạn sợ điều gì nhất?",
  "Tình bạn có ý nghĩa gì với bạn?",
  "Nếu bạn có khả năng có một siêu năng lực bạn sẽ chọn cái nào?",
  "Nếu phải cưới một người trong nhóm bạn ở đây, bạn chọn ai?",
  "Ba từ nào mô tả bạn rõ nhất?",
  "Điều gì khiến bạn khác biệt với những người khác?",
  "Người yêu đầu tiên của bạn trông như thế nào?",
  "Bạn đã bao giờ có suy nghĩ ngoại tình chưa?",
  "Bạn lãng phí thời gian sử dụng ứng dụng nào trên điện thoại nhất?",
  "Nếu người yêu của bạn se-x không hợp bạn? Bạn có dám nói ra",
  "Bạn có hát trong khi tắm? Ai khiến bạn cười nhiều nhất ở đây?",
  "Bạn đã bao giờ sai lầm và sau đó đổ lỗi cho người khác?",
  "Điều gì truyền cảm hứng làm việc, học tập cho bạn?",
  "Bạn sẵn sàng chết vì ai?",
  "Lời tán tỉnh ngớ ngẩn nào mà đối phương từng dùng để giành được sự chú ý của bạn",
  "Một ngày tuyệt vời nhất của bạn là gì?",
  "Bạn tin tưởng ai nhất trong những người ngồi ở đây?",
  "Bạn thích được người ta tán hay đi tán người ta?",
  "Bạn coi trọng điều gì nhất trong cuộc đời mình?",
  "Nếu có một giai đoạn nào đó trong đời mà bạn muốn quên đó là giai đoạn nào?",
  "Với bạn như thế nào là một nụ hôn tuyệt vời?",
  "Những người đặc biệt trong cuộc đời bạn là ai?",
  "Người cuối cùng bạn nói chuyện điện thoại là ai ? Ai là người hay nói chuyện điện thoại với bạn nhất ?",
  "Làm con trai hay con gái sẽ tốt hơn ?",
  "Bạn có mối tình đơn phương nào phải từ bỏ trong tiếc nuối không?",
  "Điều bạn từng làm khiến bố mẹ tự hào nhất",
  "Điều bạn từng làm khiến bố mẹ thất vọng",
  "Bạn chọn trí tuệ hay ngoại hình",
  "Bạn thích được người yêu quan tâm những điều gì?",
  "Điều kì quặc nhất bạn từng tìm kiếm trên google là gì?",
  "Bạn đã từng nói dối bố mẹ điều gì?",
  "Môn thể thao bạn yêu thích nhất?",
  "Bạn đã bao giờ tự ti về một đặc điểm ngoại hình của mình tới phát khóc chưa?",
  "Nêu từng đặc điểm tốt của từng người trong nhóm",
  "Nếu phát hiện người yêu của bạn ngoại tình bạn sẽ làm như thế nào?",
  "Nếu gia đình phản đối, bạn có tiếp tục yêu người đó không?",
  "Bạn đã bao giờ ngồi bên điện thoại cả đêm để chờ tin nhắn của ai đó chưa?",
  "Bạn thường nói dối người yêu bạn về vấn đề gì?",
  "Bạn nghĩ sao về đồ chơi tình dục?",
  "Lí do chia tay mà bạn thấy nhảm nhất",
  "Bạn thích xưng hô như thế nào với người yêu",
  "Câu nói dối kinh điển của con trai/con gái là gì?",
  "Phẩm chất nào bạn thấy rằng cần thiết có ở một người đàn ông",
  "Phẩm chất nào bạn thấy rằng cần thiết có ở một người phụ nữ",
  "Lời nói dối gần đây nhất của bạn?",
  "Điều gì bạn ghét nhất ở người yêu cũ",
  "Bạn thất vọng điều gì nhất ở bản thân",
  "Bạn tự hào điều gì nhất ở bản thân",
  "Số lượng nhà nghỉ bạn đã từng đi?",
  "Người nào trong nhóm bạn sẽ chọn để kể bí mật của mình đầu tiên",
  "Bạn nghĩ gì về mối quan hệ sugar baby sugar daddy",
  "Đã bao giờ bạn khóc dưới mưa hay trong nhà tắm chưa?",
  "Thể loại con trai con gái bạn ghét nhất",
  "Câu nói nào của bố mẹ khiến bạn nhớ mãi",
  "Bạn có muốn được người khác bao nuôi không?",
  "Một điều người khác thường đánh giá sai về bạn",
  "Bạn đã bao giờ chụp ảnh nude chưa?",
  "Giữa nhan sắc đẹp - Kỹ thuật tệ và Nhan sắc trung bình - Kỹ thuật tốt bạn chọn cái gì?",
  "Người khác giới nào trong bàn nhậu này khiến bạn bị ấn tượng khi lần đầu gặp mặt (không tính người yêu của bạn nếu có)",
  "Tần suất bạn “tự vui” là bao nhiêu lần/tháng?",
  "Dấu hiệu nào cho biết bạn đã bắt đầu hết yêu một người?",
  "Bạn đã từng yêu ai thật điên cuồng bất chấp tất cả chưa? Tại sao?",
  "Chọn một người ở đây bạn không muốn cưới làm chồng nhất và lý do tại sao?",
  "Bạn đã từng làm ai đó trong bàn nhậu này buồn chưa? Tại sao lại như thế?",
  "Bạn muốn thay đổi điều gì ở bản thân?",
  "Những người ở đây ai giống với mẫu người yêu bạn mong ước nhất? Tại sao?",
  "Bạn đã từng chán người yêu chưa . Tại sao?",
  "Lý do khiến bạn chia tay mối tình gần đây nhất là gì?",
  "Khi say bạn muốn làm gì nhất?",
  "Bạn chọn tình yêu hay sự nghiệp trước? Tại sao?",
  "Thời gian bạn thấy hợp lý nhất để có thể “make love” là khi nào?",
  "Bạn có muốn người yêu mình có bạn thân khác giới không? Tại sao?",
  "Lý do bạn không còn chơi với người bạn từng rất thân là gì?",
  "Người yêu cũ nào khiến bạn cảm thấy nuối tiếc nhất",
  "Bạn đã từng thích bạn thân khác giới chưa? Đó là ai???",
  "Bạn đã từng thích \"con thầy người yêu bạn gái(trai) cơ quan\" chưa?",
  "Bạn đã từng \"cảm nắng\" ai đó trong khi đang có người yêu chưa?",
  "Trang web '18' yêu thích của bạn là gì?",
  "Khoảnh khắc xấu hổ nhất của bạn là gì?",
  "Số đo 3 vòng của bạn là bao nhiêu?",
  "Bí mật nào của bạn mà bạn chưa từng nói cho ai biết",
  "Bạn nghĩ gì về người ngồi cạnh bạn vào lần đầu gặp mặt?",
  "Có bao giờ bạn “tè” trong hồ bơi không?",
  "Bạn sẽ làm gì nếu bạn có giới tính khác trong một ngày?",
  "Số lần bạn lò vì sóng nhiều nhất trong một mối quan hệ là mấy lần?",
  "Bạn muốn làm nhân vật hư cấu nào? Vì sao?",
  "Bạn nghĩ ở đây ai có vòng ba đẹp nhất?",
  "Lần cuối cùng bạn khóc là bao giờ? Và tại sao?",
  "Crush của bạn gần đây nhất là ai?",
  "Bạn đã từng mập mờ với bao nhiêu người?",
  "Bạn sẽ nói gì với bản thân nếu được trở về 10 năm trước",
  "Mùi kỳ lạ nào mà bạn thích?"
]

// Dare challenges
const dareChallenges = [
  "Hãy cùng một người nhảy phong cách nhạc đám cưới miền Tây",
  "Giả làm tiếng sói tru thật lớn",
  "Ăn hết miếng dưa leo (được thái dọc) trong một lần cắn",
  "Mũi chạm mũi một người được cả bàn chỉ định trong còng 15s",
  "Làm các động tác dễ thương trong vòng 30s",
  "Nhắm mắt và đoán một người được cả bàn chỉ định bằng cách chạm vào mặt họ",
  "Đọc 3 tin nhắn trên app hẹn hò (facebook dating hoặc Tinder) của bạn cho mọi người nghe",
  "Uống ly rượu trên bàn chỉ bằng miệng của bạn",
  "Gọi cho mẹ và nói “Con yêu mẹ nhiều lắmm”",
  "Nhìn vào mắt một người được cả bàn chỉ định trong vòng 30s sau đó hôn lên trán họ một cái ra tiếng",
  "Mở Facebook Story, chọn Story của người thứ 3, rồi trả lời Story đó bằng câu: ‘Anh/Em đứng đây từ chiều, chưa thấy ai đẹp như anh/em’",
  "Để một người bất kì vẽ mặt cười lên bụng bạn",
  "Hãy đăng lên story của bạn ảnh bạn giả khóc",
  "Đọc lớn 3 tin nhắn cuối cùng bạn nhắn trên Mess!",
  "Mở lịch sử duyệt web 3 ngày gần nhất cho mọi người xem",
  "Hãy squat 30 lần và hô to \"Thể dục thể thao nâng cao sức khoẻ\"",
  "Ra đường và gọi một người lạ bất kì đi ngang và sau đó nói rằng nhận nhầm!",
  "Trộn đồ uống với một loại nước chấm bất kì và uống!",
  "Xoè toàn bộ tiền trong ví và để người bên trái nhắm mắt bốc lấy 1 tờ bất kỳ (dưới 200k)",
  "Nhảy lắc mông 15 giây",
  "Làm động tác con mèo với người bên tay phải của bạn và nói \"Meo meo meo em/anh là con mèo của anh/em\"",
  "Bế công chúa một người bất kì xoay 3 vòng!",
  "Hãy cầm ly rượu ra đường tạo dáng để mọi người chụp 1 tấm ảnh đăng story (không được chỉnh sửa ảnh)",
  "Đăng story \"Anh/ em vẫn không thể quên em/anh được\"",
  "Cõng một bạn bất kỳ được chỉ định sau đó squat 3 lần.",
  "Buộc tóc 2 chùm cho tới lúc kết thúc",
  "Hãy nhảy lắc mông trước mặt một người trong nhóm",
  "Viết và đăng một status Facebook (ít nhất 5 từ) bằng ngón chân!",
  "Cầm mũ bảo hiểm ra đường và diễn cảnh gọi khách!",
  "Tìm một người lạ khác giới và xin bắt tay cùng họ",
  "Ngồi trên ghế với tư thế mắc ẻ",
  "Hát một bài hát được cả bàn chọn",
  "Mở album ảnh ra đăng bức ảnh được lưu lâu nhất trong điện thoại lên facebook",
  "Cập nhật trạng thái mối quan hệ trên Facebook thành “đã đính hôn”",
  "Hãy kẻ mắt mà không cần soi gương và để như vậy đến khi kết thúc",
  "Thì thầm điều gợi tình vào tai người bên phải",
  "Đứng bằng 1 chân trong 30s và tạo một kiểu dáng gợi cảm nhất có thể",
  "Đi catwalk thật thần thái nào!",
  "Gửi tin nhắn \"Anh/em nhớ em/anh quá\" cho người thứ 3 trong mess",
  "Hãy rap một bài",
  "Đọc đầy đủ bảng chữ cái tiếng Việt",
  "Xoay vòng tròn 10 vòng rồi gắp ăn một món bất kì trên bàn cho vào miệng",
  "Cởi đồng hồ một người bất kỳ trong nhóm bằng miệng",
  "Uống nước đầy miệng và không được nuốt cho đến khi bạn tiếp tục thử thách tiếp theo",
  "Hãy ôm người ngồi đối diện bạn bằng chân",
  "Hát 1 bài bolero thật cảm xúc nào!",
  "Gọi cho bố và nói “Con yêu bố” nào!",
  "Tạo dáng boy phố và để mọi người chụp ảnh",
  "Show bên trong túi xách/ ví của bạn cho mọi người cùng xem!",
  "Biến áo của bạn thành croptop giữ đến lượt tiếp theo!",
  "Xoay tại chỗ 7 vòng rồi nhảy lưng gù qua một người!",
  "Show 5 bức ảnh bạn vừa lưu trong điện thoại gần đây",
  "Nhảy điệu nhảy Trần Đức Bo",
  "Nhắn “Dạo này ổn chứ” với một mập mờ cũ",
  "Đội cái nồi trên đầu cho đến khi đến vòng tiếp theo",
  "Vuốt tóc mái chéo chu mỏ chụp một tấm hình up lên story",
  "Dùng bút dạ vẽ ria mép trên mặt",
  "Mặc áo trái",
  "Gửi phản hồi trái tim cho bài đăng trên mạng xã hội của người mà bạn yêu thầm",
  "Liếm khuỷu tay của mình",
  "Nằm xuống sàn và bò giống con sâu",
  "Bịt mắt người đối diện và để họ tô son cho bạn giữ đến khi trò chơi kết thúc",
  "Cột tay bạn vào tay người ngồi bên phải bạn cho đến vòng chơi tiếp theo",
  "Show lịch sử tìm kiếm ở Facebook của bạn",
  "Đội mũ bảo hiểm cho tới khi trò chơi kết thúc",
  "Show tin nhắn cuối với nyc",
  "Diễn tả một câu thành ngữ này bằng body language để mọi người trong bàn cùng đoán \"Cười ra nước mắt\"",
  "Để người bên trái đút bạn uống nước bằng khuỷu tay của họ",
  "Vỗ mông người bên trái bạn",
  "Gọi điện cho người thứ 5 gọi bạn gần đây nhất và bật loa ngoài nói thật to \"Mình quý bạn\"",
  "Show ảnh chụp màn hình cuối cùng của bạn",
  "Show ảnh trong thùng rác của bạn",
  "Selfie trên tất cả điện thoại của mọi người trong nhóm",
  "Hát thật to bài quốc ca",
  "Đọc thật to 5 điều Bác Hồ dạy thiếu niên nhi đồng",
  "Nhìn thẳng vào môi người khác giới bất kì trong 15s",
  "Quay 1 trend tiktok và up lên story",
  "Nếu bạn là con trai thì chụp app make up, nếu bạn là con gái thì chụp cam thường và đăng lên story",
  "Chạy thật nhanh vào nhà vệ sinh và selfie với 1 vật bất kì trong đó",
  "Tập plank trong vòng 30s",
  "Nhắn tin cho ex-crush hoặc ex-lover nói là bạn nhớ họ!",
  "Bỏ áo vào quần và kéo quần lên thật cao trong 3 lượt chơi",
  "Đứng dậy và chống tay lên eo nói với giọng điệu thật chanh chua \"Tiên sư bố đứa nào rảnh nợ vác tay vào chuồng gà nhà bà thế hả? Cái giống ăn không ngồi rồi, tối đến chỉ rình rập nhà người ta mà moi móc, sống thất đức quen thân! Bà mà bắt được thì đừng có trách, bà cho biết tay\"",
  "Lấy giấy vệ sinh quấn quanh đầu bạn cho đến vòng tiếp theo",
  "Chọn một người trong phòng và khiêu vũ cùng họ",
  "Xoay chai và hôn người được chỉ",
  "Để người bên phải lau mặt cho bạn",
  "Quỳ trong 3 lượt chơi tiếp theo",
  "Gọi điện cho một người bạn và bảo mình bị gay/les",
  "Hát điệp khúc của bài hát yêu thích của bạn",
  "Đi ra ngoài và hét lên tên của người bạn thân nhất của bạn",
  "Hành động như một con khỉ trong 30 giây",
  "Chọn một người trong nhóm bôi son và hôn lên má bạn, để lại dấu son rõ ràng",
  "Cởi tất hoặc dép đeo vào tay cho đến lượt tiếp theo của bạn",
  "Để 1 người bất kì cắt tóc mái cho bạn",
  "Show tấm ảnh hài hước nhất của bạn",
  "Show tấm ảnh hồi nhỏ của bạn",
  "Nhắn tin thả thính một người lạ",
  "Gửi 1 tấm hình cute của bạn tới người bạn đang tìm hiều hoặc người yêu",
  "Uống 1 thìa nước mắm",
  "Ngồi lên đùi một người bất kì trong 30s",
  "Oẳn tù tì với 1 người bất kì ai thắng cõng người thua",
  "Ngậm đầy nước trong miệng và thở phì phì ra tiếng 3 lần",
  "Ngửi nách của mọi người chơi khác",
  "Nhắn tin hỏi một món đồ còn không và nhắn tiếp “Thế thì shop bán tiếp đi ạ”",
  "Gọi điện cho người cuối cùng trong danh bạ! (Không được xem trước)",
  "Show danh sách video đã like và lưu trên tiktok của bạn! Nếu không có tiktok thì show youtube nhé!",
  "Để mọi người \"khám phá\" một app bất kì trên điện thoại của bạn!",
  "Nói chuyện liên tục cho tới lượt tiếp theo của bạn",
  "Leo lên một cái cột và giữ trong 10 giây!",
  "Hãy đi ôm tình cảm một gốc cây trong 10 giây!",
  "Video call cho người đầu tiên bạn thấy trên Facebook!",
  "Bật máy lên và live stream cuộc vui này trong 5 phút",
  "Xoá kết bạn với người cuối cùng bạn nhắn tin trên Mess!",
  "Kêu tất cả im lặng rồi rên một tiếng!",
  "Diễn tả lại động tác với tay của bạn",
  "Share bài viết của một người bạn khác giới trong nhóm và để cap “Vợ/Chồng”",
  "Thả phẫn nộ 5 bài viết của một người bất kì",
  "Quay video review chiếc quần của bạn và up lên một trang mạng xã hội",
  "Show đoạn tin nhắn khiến bạn hạnh phúc nhất",
  "Show đoạn tin nhắn khiến bạn đau buồn nhất",
  "Để người khác bón cho bạn ăn một món bất kì bằng chân",
  "Hôn vào trán tất cả những người trong nhóm",
  "Gọi điện cho một người bạn và nói rằng bạn đang bị công an bắt",
  "Làm khuôn mặt xấu và để mọi người chụp bằng điện thoại của họ",
  "Massage vai cho người bên phải",
  "Gọi điện cho một người mà bạn đang rất nhớ",
  "Đổi màu mess của bạn với người cuối cùng bạn nhắn tin",
  "Giả làm con vịt",
  "Đặt bơ lên mũi và cố gắng liến nó (có thể thay thế bằng một thực phẩm khác)",
  "Đưa chân ra sau đầu",
  "Buộc dây giày của bạn với một người bất kì giữ cho đến khi trò chơi kết thúc",
  "Đứng lên ngồi xuống cho đến lượt tiếp theo của bạn",
  "Phạt quỳ gối giơ cao tay đến lượt tiếp theo của bạn",
  "Ngậm thìa vào miệng và bón một món ăn cho một người bất kì",
  "Nhảy một điệu nhảy đang hot trên tiktok",
  "Gửi một tin nhắn văn bản lãng mạn đến một cô gái/ chàng trai mà nhóm bạn chọn",
  "Nhổ sợ lông chân của bạn",
  "Twerk trong 30 giây",
  "Hành động như cảnh Romeo và Juliet trên tàu với một người bạn bất kì",
  "Ngửi chân người bên cạnh",
  "Cởi dây buộc tóc của một bạn nữ bất kỳ bằng răng",
  "Chạy xung quanh phòng và bắt chước một con khỉ hoặc một con khỉ đột",
  "Để những người còn lại trong nhóm gửi tin nhắn cho một người nào đó từ tài khoản Instagram của bạn",
  "Nhắn \"cảm ơn mày rất nhiều\" với người bạn đồng giới xuất hiện đầu tiên trong tin nhắn mess của bạn",
  "Ăn một miếng ớt",
  "Uống rượu kiểu giao bôi với người ngồi bên trái cách bạn một người",
  "Gửi tin nhắn thoại cho một người bạn và nói “ Sao giờ chưa về”",
  "Bảo mọi người im lặng và bạn giả vờ khóc huhu thật to",
  "Giả tiếng chó",
  "Đặt viên đá xuống quần của bạn đến khi tan hết",
  "Xin chụp ảnh với người lạ",
  "Hôn cổ người đối diện!",
  "Đọc 7 hằng đẳng thức đáng nhớ",
  "Để người bên phải thổi vào tai bạn trong vòng 30s",
  "Tạo dáng boy/girl phố cùng chụp tấm nào",
  "Mở Instagram hoặc Facebook của bạn và thích từng bài đăng của người yêu cũ",
  "Gửi 5 lời mời kết bạn mới",
  "Uống 1 cốc nước pha muối",
  "Nói lời xin lỗi tới một người bạn mà bạn chưa thể",
  "Matxa chân cho người bên trái",
  "Giả giọng phụ huynh và gọi tới 1 người bạn của bạn hỏi bạn đang ở đâu",
  "Mô tả 3 tư thế bạn thích",
  "Seifle với một chú chó hoặc mèo ở gần đó",
  "Đứng bên ngoài ngôi nhà của bạn và vẫy tay chào tất cả những người đi qua trong phút tới",
  "Tạo dáng thả tym từ bên kia đường",
  "Để tất cả mọi người quay lưng lại ôm từ sau lưng một người mà bạn muốn",
  "Nhảy điệu nhảy Gangnam Style",
  "Chui qua gầm bàn",
  "Đăng bản nháp tiktok",
  "Để ai đó đăng bất kì điều họ muốn lên trang cá nhân của bạn",
  "Đứng trước quạt và làm một bài hát thật phiêu nào",
  "Nếu bạn còn độc thân hãy đeo túi của một bạn nữ hoặc tựa vai một bạn nam chụp và up lên Facebook Người có bồ được miễn",
  "Trồng cây chuối",
  "Show tấm ảnh với nyc",
  "Nằm dưới đất bơi ếch 10 giây",
  "Cõng một người bạn khác giới bất kì đi một vòng",
  "Đi lấy chổi và làm điệu tango tốt nhất của bạn",
  "Nhắm mắt và gửi một tin nhắn mù cho một người ngẫu nhiên",
  "Rap một đoạn",
  "Giao tiếp bằng mắt với một người lạ ngẫu nhiên và giữ nó trong ít nhất 30 giây",
  "Gọi cho một người bạn giả vờ đó là sinh nhật của họ và hát cho họ nghe Chúc mừng sinh nhật",
  "Cho cả nhóm xem bức ảnh xấu hổ nhất của bạn",
  "Đánh răng bằng sốt cà chua hoặc mù tạt",
  "Seifle cùng thùng rác",
  "Cho người khác bỏ nước đá vào áo",
  "Đổi quần áo với người khác",
  "Show cách lưu tên trong danh bạ của bạn",
  "Thả tym story năm người lạ khác giới trên Facebook",
  "Chúc ngủ ngon người đầu tiên bạn nghĩ đến",
  "Show lượt người xem story của bạn",
  "Share một bài viết của Diana lên trang cá nhân",
  "Share một bài viết của Durex lên trang cá nhân",
  "Mặc áo chống nắng đội mũ cho tới khi trò chơi kết thúc",
  "Để một người bạn bất kì kẻ lông mày cho bạn",
  "Tiến tới một người lại và chúc họ một ngày tốt lành",
  "Khen một người lạ rằng họ đẹp trai xinh gái",
  "Xin infor một người lạ khác giới",
  "Bịt mắt cầm chân một người và đoán đó là ai",
  "Bịt mắt cầm tay một người và đoán nó là ai",
  "Tán tỉnh người ngồi bên tay trái bạn bắt buộc phải có câu “Anh em đẹp quá em/anh nhìn muốn chảy cả nước miếng” bằng tông giọng quyến rũ",
  "Mở facebook lên và bão phẫn nộ người đầu tiên xuất hiện trên newsfeed của bạn",
  "Hãy hôn vào tai người ngồi bên tay phải của bạn",
  "Thể hiện tư thế bạn yêu thích nhất",
  "Trộn 3 món ăn gần bạn nhất và ăn hết nó",
  "Chạy ra quan tạp hóa gần nhất mua một gói bim bim cho người ngồi đối diện bạn",
  "Hãy làm một cái nhẫn bằng giấy ăn và cầu hôn người ngồi cách bạn 1 người.",
  "Đăng lên story của bạn hình ảnh của một người khác giới ngồi trong cùng bàn nhậu với bạn",
  "Trong 20 phút không được nói từ ly nếu nói bạn bị phạt uống 3 ly",
  "Cho mọi người xem tin nhắn bạn đi thả thính gần đây nhất",
  "Đánh son lên môi (kể cả bạn là nam hay nữ) nếu sau 15 phút son bị trôi thì uống gấp đôi",
  "Hát hết một bài hát mà mọi người yêu cầu",
  "Ôm tất cả những người trong vòng mà miệng ngậm một ly rượu đầy nếu rượu bị rớt ra thì phải uống 2 ly",
  "Bạn bị bịt mặt và phải ngửi một thứ bất kỳ. Nếu đoán được thì sẽ không phải uống",
  "Diễn tả một câu ca dao tục ngữ bằng hành động để cho mọi người đoán? Nếu mọi người đoán được bạn sẽ không phải uống.",
  "Nhảy điệu nhảy của Mono trong bài Waiting for you",
  "Hãy diễn tả cách bạn chia tay một người",
  "Ngậm nước trong miệng trong vòng 1 phút nếu lỡ \"phun mưa\" thì bạn phải uống 2 ly",
  "Mô tả bằng hành động để diễn tả một người ở đây nếu mọi người không đoán được bạn phải uống 2 ly",
  "Hãy đứng lên và lắc mông trong vòng 30 giây",
  "Cho mọi người xem lịch sử web của bạn mà không được xóa bất kỳ thứ gì",
  "Hãy ăn hết một miếng chanh mà không nhăn mặt",
  "Đoán số đo 3 vòng của người được cả bàn chỉ định",
  "Diễn lại một cảnh trong bộ phim yêu thích của bạn",
  "Bạn sẽ làm chó hoặc mèo(tùy bàn chỉ định) trong vòng 5 phút",
  "Đọc cho mọi người nghe tin nhắn mới nhất mà bạn đã gửi",
  "Sang nhà hàng xóm hỏi mượn giấy vệ sinh",
  "Đổi quần áo với người khác(do bàn chỉ định)",
  "Chống đẩy 10 lần",
  "Chọn một thứ trong thùng rác và âu yếm nó trong 10 giây",
  "Trộn tất cả các loại nước trên bàn và uống một ngụm",
  "Xỏ tất của người bên cạnh vào tay bạn",
  "Gửi cho người nối tiếng mà bạn yêu thích một bức ảnh ngớ ngẩn",
  "Đồ lót của bạn có màu gì? Chứng minh đi",
  "Sờ vào nách người được chỉ định"
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
          <div class="card-face card-front bg-gradient-to-br from-[#4a3a1a] to-[#2d2410] rounded-3xl p-6 shadow-2xl border border-yellow-900/30">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-lg">
                <span class="text-3xl font-black text-[#2d2410]">?</span>
              </div>
            </div>
            <h2 class="text-[#f59e0b] text-3xl font-black text-center mb-2 tracking-wide">THẬT</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#f59e0b]">
            <div class="mt-4">
              <h3 class="text-[#f59e0b] font-bold tracking-widest text-sm uppercase mb-2 text-center">Câu hỏi Thật</h3>
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
          <div class="card-face card-front bg-gradient-to-br from-[#4a3a1a] to-[#2d2410] rounded-3xl p-6 shadow-2xl border border-yellow-900/30">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#2d2410]">
                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 class="text-[#f59e0b] text-3xl font-black text-center mb-2 tracking-wide">THÁCH</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#f59e0b]">
            <div class="mt-4">
              <h3 class="text-[#f59e0b] font-bold tracking-widest text-sm uppercase mb-2 text-center">Thử thách</h3>
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

    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
       <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce mb-32 relative z-50">
           <p class="text-white text-xl font-bold mb-4">Chọn 1 trong 2 lá bài Thật hay Thách</p>
           <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#f59e0b]" />
       </div>
       <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
           <p class="text-white text-xl font-bold mb-8">Vuốt sang ngang để chuyển sang cặp bài mới</p>
           <div class="flex gap-12 items-center">
               <UIcon name="i-heroicons-arrow-left" class="text-4xl text-white/50 animate-pulse" />
               <UIcon name="i-heroicons-hand-raised" class="text-6xl text-[#f59e0b] animate-wiggle" />
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
