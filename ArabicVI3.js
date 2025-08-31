/**
 * @name ArabicVI3
 * @version 1.1.0
 * @description  مرحباً بكم جميعاً! تم تعريب واجهة ديسكورد بالكامل من منصة مجتمع Security VI. لأي مشاكل أو استفسارات، تواصلوا معنا.
 * @author 0x.vi3myl
 */

const { WebpackModules } = BdApi;


class DiscordArabicTranslator {
    constructor() {
        this.arabicTranslations = {
            "User Settings": "إعدادات المستخدم",
            "Add up to 250 custom emoji that anyone can use in this server. Animated GIF emoji may be used by members with Discord Nitro.": "أضف ما يصل إلى 250 إيموجي مخصص يمكن لأي شخص استخدامه في هذا السيرفر: يمكن للأعضاء الذين لديهم Discord Nitro استخدام إيموجي GIF المتحركة.",
            "Upload Emoji": "رفع ملف الصورة",
            "Profile": "الملف الشخصي",
            "Mention": "المنشن",
            "Message": "الرسائل",
            "Upload more stickers to make use of this unlocked level.": "قم برفع المزيد من الملصقات للاستفادة من هذا المستوى المفتوح",
            "Call": "أتصل",
            "Show": "أظهار",
            "Blur": "فلاتره",
            "Add Note": "أضافت مذكرة",
            "Add Friend Nickname": "إضافة لقب للصديق",
            "Apps": "التطبيقات",
            "Invite to Server": "أرسال دعوة الى المجتمعات",
            "Remove Friend": "إزالة صديق",
            "Ignore": "تجاهل",
            "Block": "بلوك 🚫",
            "Role": "رولات السيرفر",
            "Open in Mod View": "كنترول الادمن",
            "Verify Member": "تحقق من العضو",
            "Timeout": "ايقاف موقت من المجتمع",
            "My Account": "حسابي",
            "Friend": "صديق",
            "Activity": "النشاط",
            "View Full Profile": "عرض الملف الشخصي الكامل",
            "Report User Profile": "رفع بلاغ على الحساب",
            "Profile": "الملف الشخصي",
            "Privacy & Safety": "الخصوصية والأمان",
            "Authorized Apps": "التطبيقات المصرح بها",
            "Connections": "الاتصالات",
            "Mark as Verified": "وضع علامة تم التحقق",
            "View Verification Code": "عرض رمز التحقق",
            "Appearance": "المظهر",
            "Notifications": "الإشعارات",
            "Voice & Video": "الصوت والفيديو",
            "Text & Images": "النصوص والصور",
            "Language": "اللغة",
            "Folder Name": "أسم المجلد",
            "Folder Color": "لون المجلد",
            "Mark Folder As Read": "قراءة كل الرسائل في المجلد",
            "Folder Settings": "فتح اعدادات المجلد",
            "Only @mentions": "فقط الذكر @mentions",
  "Filter by User": "التصفية حسب المستخدم",
  "Filter by Action": "التصفية حسب الإجراء",
            "ACTIVE INVITE LINKS": "الروابط الدعوة الخاص في السيرفر المفعله حالينا",
            "Pause Invites": "إيقاف الدعوات مؤقتًا",
            "Create invite link": "إنشاء رابط دعوة",
            "Save Changes": "حفظ التغييرات",
            "Cancel": "إلغاء",
              "Rules or guidelines channel": "قناة القواعد أو الإرشادات",
  "Please select the channel that hosts your rules. This channel will by default start from the top and will feature a special header.": "يرجى تحديد القناة التي تحتوي على القواعد الخاصة بك. ستبدأ هذه القناة افتراضيًا من الأعلى وستتميز بعنوان خاص.",
  
  "Community Updates Channel": "قناة تحديثات المجتمع",
  "This is the channel where Discord will send relevant updates for Community admins and moderators. As some info might be sensitive, we recommend selecting a role-restricted channel.": "هذه هي القناة التي سيرسل فيها Discord التحديثات المهمة لمسؤولي المجتمع والمشرفين. نظرًا لأن بعض المعلومات قد تكون حساسة، نوصي بتحديد قناة مقيدة بدور معين.",
    "A server template is an easy way to share your server setup and help anyone create a server instantly.": "قالب الخادم هو طريقة سهلة لمشاركة إعدادات خادمك ومساعدة أي شخص على إنشاء خادم على الفور.", 
  "Safety Notifications Channel": "قناة إشعارات الأمان",
  "This is the channel where Discord will send you important safety updates about your server. As some info might be sensitive, we recommend selecting a role-restricted channel.": "هذه هي القناة التي سيرسل فيها Discord تحديثات أمان مهمة حول خادمك. نظرًا لأن بعض المعلومات قد تكون حساسة، نوصي بتحديد قناة مقيدة بدور معين.",
    "Server Description": "وصف الخادم",
  "Describe your community. This description will be displayed in external embeds of this server’s invite link.": "صف مجتمعك. سيتم عرض هذا الوصف في الروابط المدمجة الخارجية لرابط دعوة هذا الخادم.",
    "When someone uses your server template link, they create a new server pre-filled with the same channels, roles, permissions, and settings as yours.": "عندما يستخدم شخص ما رابط قالب خادمك، يقوم بإنشاء خادم جديد مملوء مسبقًا بنفس القنوات، الأدوار، الأذونات، والإعدادات الخاصة بك.", 
  "Disable Community": "تعطيل المجتمع",
  "This will remove specific features for Community Servers, like Server Discovery and Server Insights.": "سيؤدي هذا إلى إزالة ميزات محددة لخوادم المجتمع، مثل اكتشاف الخادم وتحليلات الخادم.",
  "Server Primary Language": "اللغة الأساسية للخادم",
  "This helps Discord customize features for you and your members.": "يساعد هذا Discord على تخصيص الميزات لك ولأعضاء خادمك.",
            "Links": "الروابط",
  "Invite Only": "الدعوة فقط",
  "Apply to Join": "طلب الانضمام",
  "Discoverable": "قابل للاكتشاف",
  "People can join your server directly with an invite": "يمكن للناس الانضمام إلى خادمك مباشرة عبر الدعوة",
  "People must submit an application and be approved to join": "يجب على الأشخاص تقديم طلب والحصول على الموافقة للانضمام",
            "Anyone can join your server directly through Server Discovery": "يمكن لأي شخص الانضمام إلى خادمك مباشرة من خلال اكتشاف الخادم",
             "Join Application": "طلب الانضمام",
  "Add questions to your application. People dont’t join your server until you approve their application. You’ll have the option to DM applicants before approving or denying them.": "أضف أسئلة إلى طلب الانضمام الخاص بك. لا ينضم الأشخاص إلى خادمك حتى توافق على طلبهم. سيكون لديك خيار إرسال رسالة خاصة للمتقدمين قبل الموافقة أو الرفض.",
            "Display": "العرض",
            "Reset": "اعادة",
              "Temporarily stop new members from joining this server via invite or vanity links.": "إيقاف انضمام الأعضاء الجدد مؤقتًا إلى هذا الخادم عبر الروابط الدعوية أو الروابط المخصصة.",
  "Pause DMs": "إيقاف الرسائل المباشرة مؤقتًا",
  "Temporarily stop new direct messages from being sent between members in your server. Friends can still DM each other, moderators can still DM members, and your Apps can still DM members.": "إيقاف إرسال الرسائل المباشرة الجديدة مؤقتًا بين الأعضاء في خادمك. لا يزال الأصدقاء قادرين على مراسلة بعضهم البعض، والمشرفون لا يزال بإمكانهم مراسلة الأعضاء، وتطبيقاتك لا تزال قادرة على مراسلة الأعضاء.",
            "Confirm": "تأكيد",
              "Grant temporary merntership": "منح عضوية مؤقتة",
  "Temporary members are automatically kicked when they disconnect unless a role has been assigned": "يتم طرد الأعضاء المؤقتين تلقائيًا عند تسجيل الخروج إلا إذا تم تعيين دور لهم",
  "Max Number of Uses": "أقصى عدد من الاستخدامات",
  "Expire After": "تنتهي الصلاحية بعد",
  "Generate a New Link": "إنشاء رابط جديد",
  "Cancel": "إلغاء",
            "Gift Inventory": "هداية الديسكورد",
            "Billing": "فواتير الشراء",
            "Delete": "حذف",
            "General Server Permissions": "صلاحيات السيرفر العامة",
"Display role members separately from online members": "عرض أعضاء الدور بشكل منفصل عن الأعضاء المتصلين",
  "Allow anyone to@mention this role": "السماح لأي شخص بذكر هذا المنشن @mention",
"Clear permissions": "مسح الصلاحيات",
"Members use the color of the highest role they have on the roles list.": "يستخدم الأعضاء لون أعلى دور لديهم في قائمة الأدوار.",
"View Channels": "عرض القنوات",
"Allows members to view channels by default (excluding private channels).": "يسمح للأعضاء بعرض القنوات بشكل افتراضي (باستثناء القنوات الخاصة).",
  "This will let you test what actions this role can take and what channels it can see. Only available to Server Owners and Admine.": "سيسمح لك هذا باختبار ما يمكن لهذا الدور القيام به من إجراءات وما القنوات التي يمكنه رؤيتها. متاح فقط لمالكي الخادم والمديرين.", 
"Manage Channels": "إدارة القنوات",
"Allows members to create, edit, or delete channels.": "يسمح للأعضاء بإنشاء، تعديل، أو حذف القنوات.",
  "Allows members to use @everyone (everyone in the server) or @here (only online members in that channel). They can also @mention all roles, even if the role’s “Allow anyone to mention this role” permission is disabled.": "السماح للأعضاء باستخدام @everyone (الجميع في السيرفر) أو @here (الأعضاء المتصلين فقط في تلك القناة). كما يمكنهم أيضًا منشن لكل الرتب، حتى لو كانت صلاحية 'السماح للجميع بذكر هذا الدور' معطلة.", 
"Manage Roles": "إدارة الرتب",
"Send Messages in Threads and Posts": "إرسال الرسائل في المواضيع والمنشورات",
"Manage Threads and Posts": "إدارة المواضيع والمنشورات",
"Allows members to create new roles and edit or delete roles lower than their highest role. Also allows members to change permissions of individual channels that they have access to.": "يسمح للأعضاء بإنشاء رتب جديدة وتعديل أو حذف الرتب الأقل من رتبتهم الأعلى. كما يسمح لهم بتغيير صلاحيات القنوات التي لديهم صلاحية الوصول إليها.",
  "Send Messages and Create Posts": "السماح للأعضاء بإرسال الرسائل وإنشاء المنشورات",
  "Allow members to send messages in text channels and create posts in forum channels.": "السماح للأعضاء بإرسال الرسائل في قنوات النصوص وإنشاء المنشورات في قنوات المنتدى.",
"Server Rules": "قواعد الخادم",
  "Members must agree to rules before they can chat or interact in the server.": "يجب على الأعضاء الموافقة على القواعد قبل أن يتمكنوا من الدردشة أو التفاعل في الخادم.",
  "Allow members to send messages in threads and in posts on forum channels.": "السماح للأعضاء بإرسال الرسائل في المواضيع والمنشورات في قنوات المنتدى.",

  "Allow members to create threads that everyone in a channel can view.": "السماح للأعضاء بإنشاء مواضيع يمكن للجميع في القناة مشاهدتها.",

  "Allow members to create invite-only threads.": "السماح للأعضاء بإنشاء مواضيع لدعوات فقط.",

  "Allows links that members share to show embedded content in text channels.": "السماح للروابط التي يشاركها الأعضاء بإظهار المحتوى المدمج في قنوات النصوص.",

  "Allows members to upload files or media in text channels.": "السماح للأعضاء برفع الملفات أو الوسائط في قنوات النصوص.",

  "Allows members to add new emoji reactions to a message. If this permission is disabled, members can still react using any existing reactions on a message.": "السماح للأعضاء بإضافة تفاعلات إيموجي جديدة على الرسائل. إذا كانت هذه الصلاحية معطلة، يمكن للأعضاء التفاعل باستخدام أي تفاعلات موجودة على الرسالة.",
  "Allows members to delete messages by other members or pin any": "السماح للأعضاء بحذف رسائل الأعضاء الآخرين أو تثبيت أي رسالة.",
  
  "Allows members to pin or unpin any message.": "السماح للأعضاء بتثبيت أو إزالة تثبيت أي رسالة.",
  
  "Allows members to rename, delete, close, and turn on slow mode for threads and posts. They can also view private threads.": "السماح للأعضاء بإعادة تسمية، حذف، غلق، وتفعيل وضع التباطؤ للمواضيع والمنشورات. يمكنهم أيضًا جعل المواضيع خاصة.",
  
  "Allows members to read previous messages sent in channels. If this permission is disabled, members only see messages sent when they are online. This does not fully apply to threads and forum posts.": "السماح للأعضاء بقراءة الرسائل السابقة المرسلة في القنوات. إذا كانت هذه الصلاحية معطلة، فإن الأعضاء سيشاهدون فقط الرسائل المرسلة عندما يكونون متصلين. هذا لا ينطبق بالكامل على المواضيع ومنشورات المنتدى.",
  
  "Allows members to send text-to-speech messages by starting a message with /tts. These messages can be heard by anyone focused on the channel.": "السماح للأعضاء بإرسال رسائل تحويل النص إلى كلام عن طريق بدء الرسالة بـ /tts. يمكن سماع هذه الرسائل من قبل أي شخص مركز في القناة.",
    "Allows members to speak in voice channels by simply talking. If this permission is disabled, members are required to use Push-to-talk. Good for controlling background noise or noisy members.": "السماح للأعضاء بالتحدث في قنوات الصوت بمجرد الحديث. إذا كانت هذه الصلاحية معطلة، يحتاج الأعضاء لاستخدام الضغط للتحدث (Push-to-Talk). هذه الصلاحية مفيدة للتحكم في الضوضاء الخلفية أو الأعضاء المزعجين.",
    "Allows members to deafen other members in voice channels, which means they won't be able to speak or hear others.": "السماح للأعضاء بكتم صوت الأعضاء الآخرين في قنوات الصوت، مما يعني أنهم لن يستطيعوا التحدث أو سماع الآخرين.",
  
  "Allows members to disconnect or move other members between voice channels that the member with this permission has access to.": "السماح للأعضاء بفصل أو نقل الأعضاء الآخرين بين قنوات الصوت التي يمكن للعضو الذي لديه هذه الصلاحية الوصول إليها.",
    "Allows members to deafen other members in voice channels, which means they won’t be able to speak or hear others.": "السماح للأعضاء بكتم صوت الأعضاء الآخرين في قنوات الصوت، مما يعني أنهم لن يستطيعوا التحدث أو سماع الآخرين.", 
  "Allows members to use commands from applications, including slash commands and context menu commands.": "السماح للأعضاء باستخدام الأوامر من التطبيقات، بما في ذلك أوامر الشريط وأوامر قائمة السياق.",
    "Allows members to delete messages by other members or pin any message.": "يتيح للأعضاء حذف رسائل الأعضاء الآخرين أو تثبيت أي رسالة.",
  "Allows members to use Activities.": "السماح للأعضاء باستخدام الأنشطة.",
  
  "Allows apps that members have added to their account to post messages.": "السماح للتطبيقات التي أضافها الأعضاء إلى حسابهم بنشر الرسائل.",
  
  "When disabled, the messages will be private.": "عند تعطيل هذه الصلاحية، ستكون الرسائل خاصة.",
  
  "Allows members to deafen other members in voice channels, which means they won't be able to speak or hear others.": "السماح للأعضاء بكتم صوت الأعضاء الآخرين في قنوات الصوت، مما يعني أنهم لن يستطيعوا التحدث أو سماع الآخرين.",
  
  "Allows members to mute other members in voice channels for everyone.": "السماح للأعضاء بكتم صوت الأعضاء الآخرين في قنوات الصوت للجميع.", 


  "Stage Channel Permissions": "صلاحيات قنوات الستيج",
    "Allows members to edit and cancel events.": "السماح للأعضاء بتعديل وإلغاء الفعاليات.", 
  "Allow requests to speak in Stage channels. Stage moderators manually approve or deny each request.": "السماح بطلبات التحدث في قنوات الستيج. يقوم مشرفو الستيج بالموافقة أو الرفض يدويًا لكل طلب.",
    "Allows apps that members have added to their account to post messages. When disabled, the messages will be private.": "السماح للتطبيقات التي أضافها الأعضاء إلى حسابهم بنشر الرسائل. عند تعطيل هذه الصلاحية، ستكون الرسائل خاصة.", 
  "Allows members to create events.": "السماح للأعضاء بإنشاء الفعاليات.",
  "Allows members to be more easily heard in voice channels. When activated, the volume of others without this permission will be automatically lowered. Priority Speaker is activated by using the keybind.": "السماح للأعضاء بأن يتم سماعهم بشكل أسهل في قنوات الصوت. عند تفعيل هذه الصلاحية، يتم تقليل حجم الصوت للأعضاء الآخرين الذين ليس لديهم هذه الصلاحية. يتم تفعيل المتحدث ذو الأولوية باستخدام الاختصار.",
  "Allows members to send voice messages.": "السماح للأعضاء بإرسال رسائل صوتية.",
  
  "Allows members to create": "السماح للأعضاء بإنشاء",
  
  "Allows members to join voice channels and hear others.": "السماح للأعضاء بالانضمام إلى قنوات الصوت والاستماع للآخرين.",
  
  "Allows members to talk in voice channels. If this permission is disabled, members are default muted until somebody with the 'Mute Members' permission un-mutes them.": "السماح للأعضاء بالتحدث في قنوات الصوت. إذا كانت هذه الصلاحية معطلة، يتم كتم الأعضاء بشكل افتراضي حتى يقوم شخص آخر لديه صلاحية 'كتم الأعضاء' بإلغاء كتمهم.",
  "Allows members to use emoji from other servers, if they’re a Discord Nitro member.": "السماح للأعضاء باستخدام إيموجي من سيرفرات أخرى، إذا كانوا من أعضاء Discord Nitro.",

  "Allows members to use stickers from other servers, if they’re a Discord Nitro member.": "السماح للأعضاء باستخدام ملصقات من سيرفرات أخرى، إذا كانوا من أعضاء Discord Nitro.",
"Create Expressions": "إنشاء تعبيرات",
"Allows members to add custom emoji, stickers, and sounds in this server.": "يسمح للأعضاء بإضافة إيموجي، ملصقات، وأصوات مخصصة في السيرفر.",

"Manage Expressions": "إدارة التعبيرات",
"Allows members to edit or remove custom emoji, stickers, and sounds in this server.": "يسمح للأعضاء بتعديل أو إزالة الإيموجي، الملصقات، والأصوات المخصصة في السيرفر.",

"View Audit Log": "عرض سجل التدقيق",
"Allows members to view a record of who made which changes in this server.": "يسمح للأعضاء بعرض سجل يوضح من قام بأي تغييرات في السيرفر.",

"View Server Insights": "عرض إحصائيات السيرفر",
"Allows members to view Server Insights, which shows data on community growth, engagement, and more. This will allow them to see certain data about channel activity, even for channels they cannot access.": "يسمح للأعضاء بعرض إحصائيات السيرفر، والتي تعرض بيانات حول نمو المجتمع، التفاعل، والمزيد. هذا سيمكنهم من رؤية بعض البيانات عن نشاط القنوات حتى لو لم يكن لديهم وصول مباشر إليها.",
            "Create": "إنشاء",
            "Allows members to create, edit, or delete webhooks, which can post messages from other apps or sites into this server.": "يسمح للأعضاء بإنشاء، تعديل، أو حذف الوِب هوكس، والتي يمكنها نشر رسائل من تطبيقات أو مواقع أخرى داخل هذا السيرفر.",
            "Allow members to change this server's name, switch regions, view all invites, add apps to this server and create and update AutoMod rules.": "يسمح للأعضاء بتغيير اسم هذا السيرفر، وتغيير المنطقة، وعرض جميع الدعوات، وإضافة التطبيقات إلى هذا السيرفر، وإنشاء وتحديث قواعد AutoMod",
            "Manage Server": "يسمح للاعضاء تعديل اسم السيرفر وتعديل ما داخل السيرفر كامل",
              "General Server Permissions": "صلاحيات السيرفر العامة",
  "View Channels": "عرض القنوات",
  "Manage Channels": "إدارة القنوات",
  "Manage Roles": "إدارة الرُتب",
  "Create Expressions": "إنشاء التعابير (إيموجي/ملصقات/أصوات)",
  "Manage Expressions": "إدارة التعابير (إيموجي/ملصقات/أصوات)",
  "View Audit Log": "عرض سجل التدقيق",
  "View Server Insights": "عرض تحليلات السيرفر",
  "Manage Webhooks": "إدارة الوِب هوكس",

  "Membership Permissions": "صلاحيات العضوية",
  "Create Invite": "إنشاء دعوة",
  "Change Nickname": "تغيير اللقب",
  "Manage Nicknames": "إدارة الألقاب",
  "Kick Members": "طرد الأعضاء",
  "Ban Members": "حظر الأعضاء",
  "Allows members to invite new people to this server.": "يسمح للأعضاء بدعوة أشخاص جدد إلى هذا السيرفر",
  "Timeout Members": "تقييد/إسكات الأعضاء",

  "Text Channel Permissions": "صلاحيات قنوات الكتابة",
  "Send Messages": "إرسال الرسائل",
  "Send Messages in Threads": "إرسال الرسائل داخل المواضيع",
  "Create Public Threads": "إنشاء مواضيع عامة",
  "Create Private Threads": "إنشاء مواضيع خاصة",
  "Manage Threads": "إدارة المواضيع",
  "Send TTS Messages": "إرسال رسائل صوتية TTS",
  "Manage Messages": "إدارة الرسائل",
  "Embed Links": "إدراج روابط",
  "Attach Files": "إرفاق ملفات",
  "Add Reactions": "إضافة تفاعلات",
  "Use External Emoji": "استخدام الإيموجي الخارجية",
  "Use External Stickers": "استخدام الملصقات الخارجية",
  "Mention @everyone, @here, and All Roles": "منشن @everyone و @here وكل الرُتب",
  "Manage Events": "إدارة الفعاليات",
  "Use Application Commands": "استخدام أوامر التطبيقات",
  "Send Voice Messages": "إرسال رسائل صوتية",
  "Send Polls": "إرسال استطلاعات",

  "Voice Channel Permissions": "صلاحيات قنوات الصوت",
  "Connect": "ادارة دخول الروم الصوتي",
  "Speak": "التحديث في الروم الصوتي",
  "Video": "تشغيل الفيديو",
  "Use Activities": "استخدام الأنشطة",
  "Use Soundboard": "استخدام لوحة الأصوات",
  "Use External Sounds": "استخدام الأصوات الخارجية",
  "Priority Speaker": "مُتحدث ذو أولوية",
  "Mute Members": "كتم الأعضاء",
  "Deafen Members": "إسكات الأعضاء",
  "Move Members": "نقل الأعضاء",
  "Request to Speak": "طلب التحدث",
  "Manage Events (Stage)": "إدارة فعاليات الستيج",

  "Advanced Permissions": "صلاحيات متقدمة",
            "Allows members to change their own nickname, a custom name for just this server.": "يسمح للأعضاء بتغيير ألقابهم الخاصة، وهو اسم مخصص لهذا السيرفر فقط",
            "Allows members to change the nicknames of other members.": "يسمح للأعضاء بتغيير ألقاب الأعضاء الآخرين",
            "Kick will remove other members from this server. Kicked members will be able to rejoin if they have another invite. If the server enables Member Requirements, this permission enables the ability to approve or reject members who request to join.": "سيؤدي الطرد إلى إزالة أعضاء آخرين من هذا السيرفر. سيتمكن الأعضاء المطرودون من إعادة الانضمام إذا كان لديهم دعوة أخرى. إذا قام السيرفر بتمكين متطلبات العضو، فإن هذا الإذن يتيح القدرة على الموافقة أو رفض الأعضاء الذين يطلبون الانضمام.",
"Allows members to permanently ban and delete the message history of other members from this server.": "يسمح للأعضاء بحظر الأعضاء الآخرين بشكل دائم وحذف سجل الرسائل الخاصة بهم من هذا السيرفر.",
  "When you put a user in timeout they will not be able to send messages in chat, reply within threads, react to messages, or speak in voice or Stage channels.": "عند وضع عضو في فترة انتظار، لن يتمكن من إرسال الرسائل في الدردشة، الرد داخل الخيوط، التفاعل مع الرسائل، أو التحدث في القنوات الصوتية أو قنوات Stage.",
  "Allow members to send messages in text channels and create posts in forum channels.": "يسمح للأعضاء بإرسال الرسائل في القنوات النصية وإنشاء منشورات في قنوات المنتدى.",
            "Learn more.": "مزيد من المعلومات",
            "Allows members to share their video, screen share, or stream a game in this server.": "يتيح للأعضاء مشاركة فيديواتهم، ومشاركة الشاشة، أو بث لعبة في هذا الخادم.",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "Update": "تحديث",
            "Online": "متصل",
            "Idle": "خامل",
            "Do Not Disturb": "مشغول",
            "Invisible": "غير مرئي",
            "Offline": "غير متصل",
            "File": "ملف",
            "Edit": "تحرير",
            "Profiles": "قائمة البروفايل",
            "Data & Privacy": "البيانات والخصوصية",
            "Family Center": "مركز العائلة",
            "Devices": "الاجهزة المربوطه في حسابي",
            "Clips": "مقاطع الفيديو القصيرة",
            "Nitro": "شراء نيترو",
            "View": "عرض",
            "Help": "مساعدة",
            "Content & Social": "المحتوى ووسائل التواصل",
            "Bio": "السيرة الذاتية",
            "Custom Status": "الحالة المخصصة",
            "Server Boost": "اعدادات البوست",
            "Subscriptions": "أشتركات النيترو",
            "Integrations": "اعدادات البوتات",
            "Permissions": "قائمة الصلاحيات",
            "Channel Topic": "موضوع القناة",
            "Overview": "نظرة عامة",
            "Roles": "رولات السيرفر",
            "Members": "الأعضاء",
            "Kick": "طرد",
            "Ban": "حظر",
            "Mention @everyone when a Stage starts": "ذكر @everyone عند بدء الـStage",
            "Allow Stage Moderators with this role to notify @everyone when a Stage starts. This is the same permission as Mention @everyone, @here, and All Roles.": "يسمح لمشرفي الـStage الذين لديهم هذا الدور بتنبيه @everyone عند بدء الـStage. هذا نفس الإذن المخصص لذكر @everyone و @here وجميع الأدوار.",
            "Theme": "المظهر",
            "Dark": "داكن",
            "Light": "فاتح",
            "Sync with computer": "مزامنة مع الكمبيوتر",
            "Developer Options": "خيارات المطور",
            "Advanced": "متقدم",
            "Input Device": "جهاز الإدخال",
            "Output Device": "جهاز الإخراج",
            "Input Volume": "مستوى الصوت للإدخال",
            "Output Volume": "مستوى الصوت للإخراج",
            "Enable Desktop Notifications": "تفعيل إشعارات سطح المكتب",
            "Enable Push Notifications": "تفعيل الإشعارات المنبثقة",
            "Enable Taskbar Flashing": "تفعيل وميض شريط المهام",
            "Reason for Ban": "سبب الحظر",
            "Suspicious or spam account": "حساب مشبوه أو سبام",
            "Compromised or hacked account": "حساب مخترق أو تم اختراقه",
            "Breaking server rules": "مخالفة قواعد السيرفر",
            "Other": "أخرى",
            "Delete Message History": "حذف سجل الرسائل",
            "Don't Delete Any": "حظر نهائي",
            "Previous Hour": "حظر لمدة ساعة",
            "Previous 6 Hours": "حظر لمدة ستة ساعات",
            "Previous 12 Hours": "حظر لمدة 12 ساعه",
            "Previous 24 Hours": "حظر لمدة 24 ساعة",
            "Previous 3 Days": "حظر لمدة 3 ايام",
            "Invite People": "أرسال دعوة مجتمع",
            "PEOPLE":"ادعدادت العامة",
            "User Volume": "مستوى صوت المستخدم",
            "Mute": "كتم الصوت",
            "Main Profile": "الملف الشخصي الرئيسي",
            "Per-server Profiles": "ملفات شخصية لكل سيرفر",
            "Display Name": "اسم العرض",
            "Pronouns": "الضمائر",
            "Avatar": "الصورة الرمزية",
            "Change Avatar": "تغيير الصورة الرمزية",
            "Remove Avatar": "إزالة",
            "Security":"Security VI",
            "Standing":"الوضع الحالي",
            "Content": "المحتوى",
            "Sensitive content filters": "فلتر المحتوى الحساس",
            "Direct Message spam": "رسائل مباشرة مزعجة",
            "Filter all": "تصفية الكل",
            "All DMs will be filtered for spam": "سيتم تصفية جميع الرسائل المباشرة للكشف عن الرسائل المزعجة",
            "Filter from non-friends": "تصفية من غير الأصدقاء",
            "DMs from non-friends will be filtered for spam": "سيتم تصفية الرسائل المباشرة من غير الأصدقاء للكشف عن الرسائل المزعجة",
            "Do not filter": "عدم التصفية",
            "DMs will not be filtered for spam": "لن يتم تصفية الرسائل المباشرة للكشف عن الرسائل المزعجة",
            "Allow access to age-restricted commands from apps in Direct Messages": "السماح بالوصول إلى الأوامر المقيدة بالعمر من التطبيقات في الرسائل المباشرة",
            "This setting applies to all apps. Allows people 18+ to access commands marked as age-restricted in DMs": "ينطبق هذا الإعداد على جميع التطبيقات. يسمح للأشخاص فوق 18 عامًا بالوصول إلى الأوامر المحددة كمقيدة بالعمر في الرسائل المباشرة",
            "Allow access to age-restricted servers on iOS": "السماح بالوصول إلى السيرفرات المقيدة بالعمر على أجهزة iOS",
            "After joining on desktop, view your servers for people 18+ on iOS devices": "بعد الانضمام من سطح المكتب، يمكنك عرض السيرفرات المخصصة للأشخاص فوق 18 عامًا على أجهزة iOS",
            "Social permissions": "أذونات التواصل الاجتماعي",
            "Direct Messages": "الرسائل المباشرة",
            "Allow DMs from other server members": "السماح بالرسائل المباشرة من أعضاء السيرفر الآخرين",
            "Message requests": "طلبات الرسائل",
            "Filter messages from server members you may not know": "تصفية الرسائل من أعضاء السيرفر الذين قد لا تعرفهم",
            "Friend requests": " ",
            "Everyone": "الجميع",
            "Friend of friends": "أصدقاء الأصدقاء",
            "Server members": "أعضاء السيرفر",
            "Accounts you've blocked or ignored": "الحسابات التي قمت بحظرها أو تجاهلها",
            "Avatar Decoration": "زينة الصورة الرمزية",
            "Change Decoration": "تغيير الزينة",
            "Nameplate": "لوحة الاسم",
            "Change Nameplate": "تأثير",
            "Profile Effect": "تأثير الملف الشخصي",
            "Change Effect": "تغيير التأثير",
            "Profile Banner": "بانر الملف الشخصي",
            "Change Banner": "تغيير البانر",
            "Remove Banner": "إزالة",
            "Password and Authentication": "كلمة المرور والمصادقة",
            "Multi-Factor Authentication enabled": "تم تفعيل المصادقة متعددة العوامل",
            "Authenticator App": "تطبيق المصادقة",
            "Configuring an authenticator app is a good way to add an extra layer of security to your Discord account to make sure that only you have the ability to log in.": "تكوين تطبيق المصادقة طريقة جيدة لإضافة طبقة أمان إضافية لحسابك في Discord لضمان أن لديك وحدك القدرة على تسجيل الدخول.",
            "SMS Backup Authentication": "المصادقة الاحتياطية عبر الرسائل القصيرة",
            "Add your phone as a backup MFA method in case you lose access to your authenticator app or backup codes.": "أضف هاتفك كطريقة احتياطية للمصادقة متعددة العوامل في حال فقدت الوصول إلى تطبيق المصادقة أو رموز النسخ الاحتياطي.",
            "Your current phone number is:": "رقم هاتفك الحالي هو:",
            "Security Keys": "مفاتيح الأمان",
            "Add an additional layer of protection to your account with a Security Key.": "أضف طبقة حماية إضافية لحسابك باستخدام مفتاح أمان.",
            "Account Removal": "حذف الحساب",
            "Disabling your account means you can recover it at any time after taking this action.": "تعطيل حسابك يعني أنه يمكنك استعادته في أي وقت بعد اتخاذ هذا الإجراء.",
            "Mute Soundboard": "كتم لوحة الصوت",
            "Disable Video": "تعطيل الفيديو",
            "Change Nickname": "تغيير الاسم المستعار",
            "Server Settings": "أعدادات المجتمع",
            "Create Channel": "إنشاء قناة",
            "Create Category": "إنشاء مجلد",
            "Create Event": "إنشاء حدث",
            "Active Threads": "المحادثات النشطة",
            "App Directory": "دليل التطبيقات",
            "Notification Settings": "إعدادات الإشعارات",
            "Privacy Settings": "إعدادات الخصوصية",
            "Edit Per-server Profile": "تعديل الملف الشخصي لكل سيرفر",
            "Hide Muted Channels": "إخفاء القنوات المكتومة",
            "Leave Server": "مغادرة المجتمع",
            "Server Insights": "إحصاءات السيرفر",
            "Show All Channels": "أظهار الرومات المخفية",
            "Server Profile": "ملف السيرفر",
            "Server Tag": "علامة السيرفر",
            "Engagement": "التفاعل",
            "Boost Perks": "مميزات البوست",
            "EXPRESSION": "التعبيرات",
            "Emoji": "الرموز التعبيرية",
            "Stickers": "الملصقات",
            "Soundboard": "لوحة الصوت",
            "Server Template": "قالب السيرفر",
            "Saturation": "التشبع",
"Reduce the saturation of colors within the application, for those with color sensitivities. This does not affect the saturation of images, videos, role colors or other user-provided content by default.": "تقليل تشبع الألوان داخل التطبيق للأشخاص ذوي الحساسية تجاه الألوان. هذا لا يؤثر على تشبع الصور أو الفيديوهات أو ألوان الأدوار أو أي محتوى يقدمه المستخدم بشكل افتراضي.",
"Apply to custom color choices": "تطبيق على خيارات الألوان المخصصة",
"Turn on to apply this adjustment to custom color choices, like role colors": "قم بتفعيل هذا لتطبيق هذا التعديل على خيارات الألوان المخصصة، مثل ألوان الأدوار",
"Always underline links": "دائماً ضع خطاً تحت الروابط",
"Make links to websites, help articles, and other pages stand out more by underlining them.": "اجعل الروابط إلى المواقع والمقالات الإرشادية والصفحات الأخرى أكثر وضوحاً عن طريق وضع خط تحتها.",
"Role Colors": "ألوان الأدوار",
"Choose a display for role colors.": "اختر طريقة عرض ألوان الأدوار.",
"Show role colors in names": "عرض ألوان الأدوار في الأسماء",
"Show role colors next to names": "عرض ألوان الأدوار بجانب الأسماء",
"Don't show role colors": "عدم عرض ألوان الأدوار",
"Profile Colors": "ألوان الملف الشخصي",
"Sync profile themes": "مزامنة سمات الملف الشخصي",
"Enable Reduced Motion": "تمكين تقليل الحركة",
"Automatically play GIFs when Discord is focused.": "تشغيل ملفات GIF تلقائيًا عند تركيز Discord.",
"Play animated emoji": "تشغيل الرموز التعبيرية المتحركة",
"This controls when stickers animate.": "هذا يتحكم في وقت تحريك الملصقات.",
"Always animate": "تحريك دائمًا",
"Animate on interaction": "تحريك عند التفاعل",
"On the desktop client, stickers will animate on hover or focus. On mobile clients, stickers will animate on long-press.": "في تطبيق سطح المكتب، تتحرك الملصقات عند المرور فوقها أو التركيز عليها. في تطبيقات الهاتف، تتحرك عند الضغط المطول.",
"Never animate": "عدم التحريك أبدًا",
"Chat Input": "إدخال الدردشة",
"Show Send Message button": "عرض زر إرسال الرسائل",
"Use the legacy chat input": "استخدام إدخال الدردشة القديم",
"Disables most chat features but may work better with screen readers": "تعطيل معظم ميزات الدردشة ولكن قد يعمل بشكل أفضل مع قارئات الشاشة",
"Text-to-Speech": "النص إلى كلام",
"Allow playback and usage of /tts command": "السماح بتشغيل واستخدام أمر /tts",
"Text-to-Speech rate": "معدل النص إلى كلام",
"Contrast": "التباين",
"Sync contrast settings": "مزامنة إعدادات التباين",
"Reduced Motion": "تقليل الحركة",
"Input Profile": "ملف الإدخال",
"Voice Isolation": "عزل الصوت",
"Just your beautiful voice: let Discord cut through the noise": "صوتك الجميل فقط: دع Discord يزيل الضوضاء",
"Studio": "استوديو",
"Pure audio: open mic with no processing": "صوت نقي: ميكروفون مفتوح بدون معالجة",
"Custom": "مخصص",
"Advanced mode: give me all the buttons and dials!": "الوضع المتقدم: أعطني كل الأزرار والتحكمات!",
"Input Mode": "وضع الإدخال",
"Voice Activity": "نشاط الصوت",
"Push to Talk": "اضغط للتحدث",
"Input Sensitivity": "حساسية الإدخال",
"Automatically determine input sensitivity": "تحديد حساسية الإدخال تلقائيًا",
"If the indicator is solid green then Discord is transmitting your beautiful voice.": "إذا كان المؤشر أخضر ثابت فهذا يعني أن Discord ينقل صوتك الجميل.",
"Voice Processing": "معالجة الصوت",
"Echo Cancellation": "إلغاء الصدى",
"Channel Name": "أسم الروم",
"Use permissions to customize who can do what in this channel.": "استخدم الأذونات لتخصيص من يمكنه فعل ماذا في هذه القناة.",

"Channel Permissions": "أذونات القناة",
"Advanced permissions": "",
"Allows members to view this channel by default. Disabling this for @everyone will make this channel private.": "سيصبح القناة خاصة عند تعطيل هذا الخيار، ولن يتمكن أي شخص من رؤية محتوى الروم أو القناة الصوتية.",
"Stickers can be static (JPG, PNG) or animated (APNG, GIF). Stickers must be exactly 320 x 320 pixels and no larger than 512KB. We will automatically resize static JPG, PNG and animated GIF stickers for you.": "يمكن أن تكون الملصقات ثابتة (JPG, PNG) أو متحركة (APNG, GIF). يجب أن تكون الملصقات بمقاس 320 × 320 بكسل وبحجم لا يتجاوز 512 كيلوبايت. سنقوم تلقائيًا بتغيير حجم الملصقات الثابتة JPG, PNG والمتجركة GIF من أجلك.",
"Delete Channel": "حذف الروم",
"Add Friend": "أضافة صديق جديد",
"Remove Reactions": "حذف الرياكشن",
"Remove All Reactions": "حذف جميع الرياكشن",
"Upload custom sound reactions that anyone in this server can use. Nitro members will be able to access these sounds in any server on Discord.": "قم برفع ردود أفعال صوتية مخصصة يمكن لأي شخص في هذا الخادم استخدامها. سيتمكن أعضاء Nitro من الوصول إلى هذه الأصوات في أي خادم على ديسكورد.",
"Manage settings that help keep your server active.": "إدارة الإعدادات التي تساعد في الحفاظ على نشاط سيرفرك.",
"System Messages": "رسائل النظام",
"Configure system event messages sent to your server.": "تكوين رسائل أحداث النظام المرسلة إلى سيرفرك.",
"Send a random welcome message when someone joins this server.": "إرسال رسالة ترحيب عشوائية عند انضمام شخص ما إلى هذا السيرفر.",
"Prompt members to reply to welcome messages with a sticker.": "حث الأعضاء على الرد على رسائل الترحيب باستخدام ملصق.",
"Send a message when someone boosts this server.": "إرسال رسالة عند قيام شخص ما بدعم السيرفر.",
"Send helpful tips for server setup.": "إرسال نصائح مفيدة لإعداد السيرفر.",
"System Messages Channel": "قناة رسائل النظام",
"This is the channel we send system event messages to.": "هذه هي القناة التي نرسل إليها رسائل أحداث النظام.",
"Activity Feed Settings": "إعدادات موجز النشاط",
"Shows a feed of activity from games and connected apps in this server.": "يعرض موجزًا للنشاط من الألعاب والتطبيقات المتصلة في هذا السيرفر.",
"Display Activity Feed in this server": "عرض موجز النشاط في هذا السيرفر",
"Default Notification Settings": "إعدادات الإشعارات الافتراضية",
"This will determine whether members who have not explicitly set their notification settings receive a notification for every message sent in this server or not. We highly recommend setting this to only @mentions for a Community Server.": "سيحدد هذا ما إذا كان الأعضاء الذين لم يقوموا بتعيين إعدادات الإشعارات صراحةً سيتلقون إشعارًا لكل رسالة مرسلة في هذا السيرفر أم لا. نوصي بشدة بتعيين هذا على @mentions فقط لسيرفرات المجتمع.",
"All Messages": "جميع الرسائل",
"Due to this server's size, members will not get mobile push notifications for non-@mention messages.": "نظرًا لحجم هذا السيرفر، لن يتلقى الأعضاء إشعارات دفع على الهاتف للرسائل غير المنشن.",
"Only @mentions": "فقط @mentions",
"Automatically move members to this channel and mute them when they have been idle for longer than the inactive timeout. This does not affect browsers.": "نقل الأعضاء تلقائيًا إلى هذه القناة وكتمهم عند بقائهم خاملين لأكثر من المهلة المحددة للخمول. هذا لا يؤثر على المتصفحات.",
"Server Widget": "أداة السيرفر",
"and invite link.": "ورابط الدعوة.",
"Embed an HTML widget on your website to display your online members, voice channels,": "تضمين أداة HTML على موقعك لعرض الأعضاء المتصلين والقنوات الصوتية،",
"Enable Server Widget": "تمكين أداة السيرفر",
"If a channel is selected then an invite link will be generated with the widget, otherwise only online members and voice channels will be provided.": "إذا تم اختيار قناة، سيتم إنشاء رابط دعوة مع الأداة، وإلا فسيتم عرض الأعضاء المتصلين والقنوات الصوتية فقط.",
"Upload Sound": "رفع ملف صوتي",
"Use roles to group your server members and assign permissions.": "ضبط صلاحيات الرولات داخل السيرفر",
"Customize how your server appears in invite links and, if enabled, in Server Discovery and Announcement Channel messages": "تخصيص كيفية ظهور سيرفرك في روابط الدعوة، وإذا تم التفعيل، في رسائل اكتشاف السيرفر وقناة الإعلانات.",
"Allows members to join this voice channel and hear others.": "يسمح للأعضاء بالانضمام إلى هذه القناة الصوتية وسماع الآخرين.",
"Allows members to view this channel by default.": "يسمح للأعضاء بعرض هذه القناة بشكل افتراضي.",
"Allows members to change this channel’s name, description, and voice settings. They can also delete the channel.": "يسمح للأعضاء بتغيير اسم القناة، وصفها، وإعدادات الصوت. يمكنهم أيضًا حذف القناة.",
"Allows members to add new emoji reactions to a message in this channel and send reactions in voice channels. If this permission is disabled, members can still react using any existing reactions on a message.": "يسمح للأعضاء بإضافة ردود فعل جديدة بالرموز التعبيرية على رسالة في هذه القناة وإرسال ردود في القنوات الصوتية. إذا تم تعطيل هذا الإذن، يمكن للأعضاء الاستمرار في استخدام أي ردود فعل موجودة على الرسالة.",
"Allows members to disconnect other members from this channel. They will also be able to move somebody into other channels that they have this permission in.": "يسمح للأعضاء بفصل الآخرين من هذه القناة. سيتمكنون أيضًا من نقل شخص إلى قنوات أخرى لديهم إذن فيها.",
"Set Voice Channel Status": "تعيين حالة القناة الصوتية",
"Allows members to create and edit voice channel status.": "يسمح للأعضاء بإنشاء وتحرير حالة القناة الصوتية.",
"Voice Channel Chat Permissions": "أذونات دردشة القناة الصوتية",
"Automated moderation makes monitoring text chat in voice channels easier.": "تسهّل الإدارة التلقائية مراقبة دردشة النصوص في القنوات الصوتية.",
"Text Channel Permissions": "أذونات القناة النصية",
"Allows members to mute other members in this voice channel for everyone.": "يسمح للأعضاء بكتم الآخرين في هذه القناة الصوتية للجميع.",
"Send Messages": "يسمح للأعضاء بإرسال رسائل في هذه القناة.",
"Allows members to send messages in this channel.": "يسمح للأعضاء بإرسال رسائل في هذه القناة.",
'Allows members to send voice messages in this channel. Requires the "Attach Files" permission as well.': 'يسمح للأعضاء بإرسال رسائل صوتية في هذه القناة. يتطلب أيضًا إذن \'إرفاق الملفات\'.',
"Create Polls": "إنشاء استطلاعات",
"Allows members to create polls.": "يسمح للأعضاء بإنشاء استطلاعات في هذه القناة.",

"Apps Permissions": "أذونات التطبيقات",

"Use Application Commands": "استخدام أوامر التطبيقات",
"Allows members to use commands from applications in this channel, including slash commands and context menu commands.": "يسمح للأعضاء باستخدام أوامر التطبيقات في هذه القناة، بما في ذلك أوامر الشرط المائل (slash) وأوامر قائمة السياق.",

"Use Activities": "استخدام الأنشطة",
"Allows members to use Activities in this channel.": "يسمح للأعضاء باستخدام الأنشطة في هذه القناة.",

"Use External Apps": "استخدام التطبيقات الخارجية",
"Allows apps that members have added to their account to post messages in this channel. When disabled, the messages will be private.": "يسمح للتطبيقات التي أضافها الأعضاء إلى حسابهم بنشر رسائل في هذه القناة. عند تعطيله، ستكون الرسائل خاصة.",
"Send Messages in Threads": "إرسال الرسائل في المواضيع",
"Allow members to send messages in threads under this channel.": "يسمح للأعضاء بإرسال رسائل في المواضيع الفرعية لهذه القناة.",

"Create Public Threads": "إنشاء مواضيع عامة",
"Allow members to create threads that everyone in this channel can view.": "يسمح للأعضاء بإنشاء مواضيع يمكن للجميع في هذه القناة عرضها.",

"Create Private Threads": "إنشاء مواضيع خاصة",
"Allow members to create invite-only threads in this channel.": "يسمح للأعضاء بإنشاء مواضيع خاصة بالدعوة فقط في هذه القناة.",

"Embed Links": "تضمين الروابط",
"Allows links that members share to show embedded content in this channel.": "يسمح للروابط التي يشاركها الأعضاء بعرض محتوى مضمن في هذه القناة.",

"Attach Files": "إرفاق الملفات",
"Allows members to upload files or media in this channel.": "يسمح للأعضاء بتحميل الملفات أو الوسائط في هذه القناة.",

"Add Reactions": "إضافة ردود فعل",
"Allows members to add new emoji reactions to a message in this channel. If this permission is disabled, members can still react using any existing reactions on a message.": "يسمح للأعضاء بإضافة ردود فعل جديدة على الرسائل في هذه القناة. إذا تم تعطيل هذا الإذن، يمكن للأعضاء الاستمرار في استخدام أي ردود فعل موجودة على الرسالة.",

"Use External Emoji": "استخدام الرموز التعبيرية الخارجية",
"Allows members to use emoji from other servers in this channel, if they’re a Discord Nitro member.": "يسمح للأعضاء باستخدام الرموز التعبيرية من سيرفرات أخرى في هذه القناة إذا كانوا من أعضاء Discord Nitro.",
"Allows members to invite new people to this server via a direct invite link to this channel. The recipient will automatically join the voice channel if they have permission to connect.": "يسمح للأعضاء بدعوة أشخاص جدد إلى هذا الخادم عبر رابط دعوة مباشر إلى هذه القناة. سينضم المستلم تلقائيًا إلى القناة الصوتية إذا كان لديه إذن بالاتصال.",

"Voice Channel Permissions": "أذونات القناة الصوتية",

"Connect": "الاتصال",
"Allow members to join this Stage channel as the audience. Disabling this and the View Channel permissions for @everyone will make this channel private.": "يسمح للأعضاء بالانضمام إلى قناة Stage هذه كجمهور. سيؤدي تعطيل هذا الإذن وإذن 'عرض القناة' للجميع إلى جعل القناة خاصة.",

"Video": "الفيديو",
"Allows speakers to share their video, screen share, or stream a game in this Stage channel.": "يسمح للمتحدثين بمشاركة الفيديو الخاص بهم أو مشاركة الشاشة أو بث لعبة في قناة Stage هذه.",
"General Channel Permissions": "أذونات القناة العامة",
"View Channel": "عرض القناة",
"Allows members to view this channel by default. Disabling this and the Connect permission for @everyone will make this channel private.": "يسمح للأعضاء بعرض هذه القناة بشكل افتراضي. سيجعل تعطيل هذا الخيار مع إذن الاتصال لـ @everyone القناة خاصة.",
"Manage Channel": "إدارة القناة",
"(Required for Stage moderator) Allow members to set a topic to start the Stage and enable or disable requests to speak. They can also delete the Stage channel.": "(مطلوب لمشرف الستيج) يسمح للأعضاء بتحديد موضوع لبدء الستيج وتفعيل أو تعطيل طلبات التحدث. يمكنهم أيضًا حذف قناة الستيج.",
"Mute Members": "كتم الأعضاء",
"(Required for Stage moderator) Allow members to add or remove Speakers.": "(مطلوب للمشرف على الـ Stage) يسمح للأعضاء بإضافة المتحدثين أو إزالتهم.",
"Allow members to change this channel’s permissions.": "يسمح من الاشخاص تعديل على الروم و صلاحيات الروم كامله",
"Move Members": "نقل الأعضاء",
"(Required for Stage moderator) Allow members to force others to disconnect from this channel.": "(مطلوب للمشرف على الـ Stage) يسمح للأعضاء بإجبار الآخرين على قطع الاتصال من هذه القناة.",
"Allows members to use stickers from other servers in this channel, if they’re a Discord Nitro member.": "يسمح للأعضاء باستخدام الملصقات من سيرفرات أخرى في هذه القناة إذا كانوا من أعضاء Discord Nitro.",
"Events Permissions": "أذونات الفعاليات",
"Create Events": "إنشاء فعاليات",
"Allows members to create events in this channel.": "يسمح للأعضاء بإنشاء فعاليات في هذه القناة.",
"Manage Events": "إدارة الفعاليات",
"Allows members to edit and cancel events in this channel.": "يسمح للأعضاء بتعديل أو إلغاء الفعاليات في هذه القناة.",
"Mention @everyone, @here, and All Roles": "منشن @everyone و @here وجميع الرتب",

"Allows members to use @everyone or @here (only online members) in this channel. They can also @mention all roles in this channel, even if the role’s “Allow anyone to mention this role” permission is disabled.": "يسمح للأعضاء باستخدام @everyone أو @here (للأعضاء المتصلين فقط) في هذه القناة. يمكنهم أيضًا منشن جميع الرتب في هذه القناة حتى لو كان إذن 'السماح لأي شخص بمنشن هذه الرتبة' معطل.",
"Manage Messages": "يسمح للأعضاء بحذف رسائل الأعضاء الآخرين أو تثبيت أي رسالة في هذه القناة.",
"Pin Messages": "تثبيت الرسائل",
"Allows members to pin or unpin any message in this channel.": "يسمح للأعضاء بتثبيت أو إزالة تثبيت أي رسالة في هذه القناة!",

"Manage Threads": "إدارة المواضيع",
"Allows members to rename, delete, close, and turn on slow mode for threads in this channel. They can also view private threads.": "يسمح للأعضاء بإعادة تسمية، حذف، إغلاق، وتفعيل وضع البطيء للمواضيع في هذه القناة. يمكنهم أيضًا عرض المواضيع الخاصة.",

"Read Message History": "قراءة سجل الرسائل",
"Allows members to read previous messages sent in this channel. If this permission is disabled, members only see messages sent when they are online.": "يسمح للأعضاء بقراءة الرسائل السابقة المرسلة في هذه القناة. إذا تم تعطيل هذا الإذن، سيرى الأعضاء الرسائل فقط عند تواجدهم متصلين.",

"Send Text-to-Speech Messages": "إرسال رسائل تحويل النص إلى كلام",
"Allows members to send text-to-speech messages in this channel by starting a message with /tts. These messages can be heard by anyone focused on this channel.": "يسمح للأعضاء بإرسال رسائل تحويل النص إلى كلام في هذه القناة ببدء الرسالة بـ /tts. يمكن لأي شخص متابع لهذه القناة سماع هذه الرسائل.",

"Send Voice Messages": "إرسال رسائل صوتية",
"Use External Stickers": "استخدام الملصقات الخارجية",
"Allows members to use stickers from other servers in this channel, if they're a Discord Nitro member.": "يسمح للأعضاء باستخدام الملصقات من سيرفرات أخرى في هذه القناة إذا كانوا من أعضاء Discord Nitro.",
"Manage Channel": "إدارة القناة",
"Allows members to change this channel’s name, description, and text settings. They can also delete the channel.": "يسمح للأعضاء بتغيير اسم القناة، وصفها، وإعدادات النصوص. يمكنهم أيضًا حذف القناة.",
"Manage Permissions": "يسمح من الاشخاص تعديل على الروم و صلاحيات الروم كامله",
"Allows members to change this channel’s permissions.": "يسمح للأعضاء بتغيير أذونات هذه القناة.",
"Manage Webhooks": "إدارة Webhooks",
"Allows members to create, edit, or delete webhooks in this channel, which can post messages from other apps or sites.": "يسمح للأعضاء بإنشاء أو تعديل أو حذف الـ Webhooks في هذه القناة، والتي يمكنها نشر رسائل من تطبيقات أو مواقع أخرى.",
"Membership Permissions": "أذونات العضوية",
"Allows members to change this channel's name, description, and text settings. They can also delete the channel.": "يسمح للأعضاء بتغيير اسم القناة، وصفها، وإعدادات النصوص. يمكنهم أيضًا حذف القناة.",
"Allows members to change this channels permissions.": "يسمح للأعضاء بتغيير أذونات هذه القناة.",
"Create Invite": "إنشاء دعوة",
"Allows members to invite new people to this server via a direct invite link to this channel.": "يسمح للأعضاء بدعوة أشخاص جدد إلى هذا السيرفر عبر رابط دعوة مباشر لهذه القناة.",
"Noise Suppression": "كبت الضوضاء",
"Suppress background noise from your mic.": "كبت ضوضاء الخلفية من الميكروفون.",
"Krisp": "كريسب",
"Allows members to share their video, screen share, or stream a game in this voice channel.": "يسمح للأعضاء بمشاركة الفيديو أو مشاركة الشاشة أو بث لعبة في هذه القناة الصوتية.",
"Use Soundboard": "يسمح للأعضاء بإرسال أصوات من لوحة الأصوات الخاصة بالخادم في هذه القناة الصوتية.",
"Allows members to send sounds from server soundboard in this voice channel.": "يسمح للأعضاء بإرسال أصوات من لوحة الأصوات الخاصة بالخادم في هذه القناة الصوتية.",
"Use External Sounds": "استخدام الأصوات الخارجية",
"Allows members to use sounds from other servers, if they're a Discord Nitro member.": "يسمح للأعضاء باستخدام الأصوات من الخوادم الأخرى إذا كانوا مشتركين في Discord Nitro.",
"Use Voice Activity": "استخدام نشاط الصوت",
"Allows members to speak in this voice channel by simply talking. If this permission is disabled, members are required to use Push-to-talk. Good for controlling background noise or noisy members.": "يسمح للأعضاء بالتحدث في هذه القناة الصوتية بمجرد التحدث. إذا تم تعطيل هذا الإذن، يُطلب من الأعضاء استخدام الضغط للتحدث. مفيد للتحكم في الضوضاء الخلفية أو الأعضاء المزعجين.",
"Allows members to join this voice channel and hear others. Disabling this and the View Channel permissions for @everyone will make this channel private.": "يسمح للأعضاء بالانضمام إلى هذه القناة الصوتية وسماع الآخرين. سيجعل تعطيل هذا الخيار مع إذن عرض القناة لـ @everyone القناة خاصة.",
"Speak": "التحدث",
"Allows members to talk in voice channels. If this permission is disabled, members are default muted until somebody with the “Mute Members” permission un-mutes them.": "يسمح للأعضاء بالتحدث في هذه القناة الصوتية. إذا تم تعطيل هذا الإذن، فسيكون الأعضاء مكتومين افتراضيًا حتى يقوم شخص لديه إذن \"كتم الأعضاء\" بإلغاء كتمهم.",
"Standard": "قياسي",
"Members will be restricted to sending one message and creating one thread per this interval, unless they have Manage Channel or Manage Messages permissions.": "سيتم تقييد الأعضاء بإرسال رسالة واحدة وإنشاء موضوع واحد فقط خلال هذه المدة، ما لم يكن لديهم صلاحيات إدارة القناة أو إدارة الرسائل.",
"Users will need to confirm they are of over the legal age to view in the content in this channel. Age-restricted channels are exempt from the explicit content filter.": "سيحتاج المستخدمون إلى تأكيد أنهم فوق السن القانوني لعرض المحتوى في هذه القناة. القنوات المقيّدة بالعمر معفاة من فلتر المحتوى الصريح.",
"Age-Restricted Channel": "قناة مقيّدة بالعمر",
"Users will need to confirm they are of over the legal age to view in the content in this channel. Age-restricted channels are exempt from the explicit content filter.": "سيحتاج المستخدمون لتأكيد أنهم فوق السن القانوني لعرض المحتوى في هذه القناة. القنوات المقيّدة بالعمر معفاة من فلتر المحتوى الصريح.",
"Deafen Members": "كتم سماع الأعضاء",
"Allows members to deafen other members in this voice channel, which means they won’t be able to speak or hear others.": "يسمح للأعضاء بكتم سماع الأعضاء الآخرين في هذه القناة الصوتية، مما يعني أنهم لن يتمكنوا من التحدث أو سماع الآخرين.",

"Announcement Channel": "قناة الإعلانات",
"Users can Follow this channel in their own servers. Posts you \"Publish\" from this channel will appear in those servers.": "يمكن للمستخدمين متابعة هذه القناة في سيرفراتهم الخاصة. المنشورات التي تقوم بـ \"نشرها\" من هذه القناة ستظهر في تلك السيرفرات.",

"By creating an announcement channel, your server profile will be visible to others outside your server members. You can control Profile privacy in Server Settings > Profile.": "بإنشاء قناة إعلانات، سيصبح ملف سيرفرك مرئيًا للآخرين خارج أعضاء السيرفر. يمكنك التحكم بخصوصية الملف الشخصي من إعدادات السيرفر > الملف الشخصي.",
"Hide After Inactivity": "الإخفاء بعد الخمول",
"None": "لا شيء",
"Advanced Voice Activity": "ميزة كشف الصوت المتقدم",
"Turning this off may help if your voice is not being detected by the automatic input sensitivity.": "إذا طفيتها يمكن تساعد لو الميكروفون ما يكتشف صوتك تلقائيًا.",
"Automatic Gain Control": "التحكم التلقائي بمستوى الصوت",
"Automatically adjust microphone volume to keep it clear and consistent.": "يضبط صوت الميكروفون تلقائي عشان يكون واضح وثابت.",
"Bypass System Audio Input Processing": "تجاوز معالجة صوت النظام",
"System audio processing may interfere with Discord's audio processing": "معالجة صوت النظام ممكن تتداخل مع صوت Discord",
"Show a warning when Discord is not detecting audio from your mic": "ورّيك تحذير لو Discord ما شاف صوتك من الميكروفون",
"Switch voice channel warning": "تحذير عند تغيير قناة الصوت",
"Show a confirmation prompt before switching to a different voice channel.": "سوي تأكيد قبل ما تغير للقناة صوت ثانية",
"Global Attenuation": "خفض صوت التطبيقات الثانية",
"Lower the volume of other applications by this percent when someone is speaking. Set to 0% to completely disable global attenuation.": "يقلل صوت البرامج الثانية بنسبة محددة لما حدا يحكي. حط 0% لو تبغى تطفيها بالكامل.",
"When I speak": "لما أنا أحكي",
"When others speak": "لما غيري يحكي",
"Enable Quality of Service High Packet Priority": "تفعيل أولوية حزم Discord العالية",
"Hints to your router that the packets Discord is transmitting are high priority. Some routers or internet service providers may misbehave when this is set.": "يعطي راوترك إشارة إن حزم Discord مهمة. بعض الراوترات أو مزودي الإنترنت ممكن يشتكون لو فعلتها.",
"Advanced Voice Activity": "كشف الصوت المتقدم",
"Turning this off may help if your voice is not being detected by the automatic input sensitivity.": "لو طفيتها يمكن تساعد لو صوتك ما يتم اكتشافه تلقائيًا.",
"Automatic Gain Control": "التحكم التلقائي بالميكروفون",
"Automatically adjust microphone volume to keep it clear and consistent.": "يضبط صوت الميكروفون تلقائي عشان يكون واضح وثابت.",
"Bypass System Audio Input Processing": "تجاوز معالجة صوت النظام",
"System audio processing may interfere with Discord's audio processing": "معالجة صوت النظام ممكن تتداخل مع صوت Discord",
"Show a warning when Discord is not detecting audio from your mic": "ورّيك تحذير لو Discord ما يلتقط صوتك من الميكروفون",
"Switch voice channel warning": "تحذير قبل تغيير قناة الصوت",
"Show a confirmation prompt before switching to a different voice channel.": "ورّيك تأكيد قبل تغيير القناة الصوتية",
"Global Attenuation": "خفض صوت البرامج الثانية",
"Display images, videos, and lolcats": "عرض الصور والفيديوهات والـ lolcats",
"When posted as links to chat": "عند نشرها كروابط في الدردشة",
"When uploaded directly to Discord": "عند رفعها مباشرة على Discord",
"User Join": "دخول مستخدم",
"User Leave": "خروج مستخدم",
"User Moved": "تم نقل المستخدم",
"Outgoing Ring": "مكالمة صادرة",
"Incoming Ring": "مكالمة واردة",
"Stream Started": "بدأ البث",
"Stream Stopped": "توقف البث",
"Viewer Join": "انضمام مشاهد",
"Viewer Leave": "خروج مشاهد",
"Activity Start": "بدء النشاط",
"Activity End": "انتهاء النشاط",
"Activity User Join": "انضمام مستخدم للنشاط",
"Activity User Leave": "مغادرة مستخدم من النشاط",
"Invited to Speak": "دعوة للتحدث",
"Sounds": "الأصوات",
"Enable same-channel message notifications": "تفعيل تنبيهات الرسائل لنفس الروم",
"Play a unique sound when there's a new message in the channel you're currently reading.": "تشغيل صوت مميز عند وصول رسالة جديدة في الروم اللي تقرأه حالياً.",
"Disable All Notification Sounds": "إيقاف كل أصوات التنبيهات",
"Your existing notification sound settings will be preserved.": "سيتم حفظ إعدادات أصوات التنبيهات الحالية.",
"Blusy": "بلوسي",
"you're looking for per-channel or per-server notifications, right-click the desired server icon and select Notification Settings.": "لو تبغى إشعارات لكل روم أو سيرفر، اضغط بالزر اليمين على أيقونة السيرفر واختر إعدادات الإشعارات.",

"Enable Unread Message Badge": "تفعيل شارة الرسائل غير المقروءة",
"Shows a red badge on the app icon when you have unread messages.": "يظهر شريط أحمر على أيقونة التطبيق لما يكون عندك رسائل غير مقروءة.",
"Flashes the app in your taskbar when you have new notifications.": "يخلي التطبيق يومض في شريط المهام عند وصول إشعارات جديدة.",

"Reaction Notifications": "إشعارات التفاعل",
"Receive notifications when your messages are reacted to.": "استقبال إشعار لما أحد يتفاعل مع رسائلك.",
"All Messages": "كل الرسائل",
"Only Direct Messages": "الرسائل الخاصة فقط",
"Never": "أبداً",
"Email Notifications": "إشعارات البريد الإلكتروني",

"Communication Emails": "رسائل التواصل",
"Receive emails for missed calls, messages, and message digests.": "استقبل إيميلات للمكالمات الفائتة، الرسائل، وملخصات الرسائل.",
"Enable Streamer Mode": "تفعيل وضع الستريمر",

"Automatically Enable/Disable": "التفعيل/التعطيل التلقائي",
"Automatically enable/disable Streamer Mode if OBS or Split are running on this computer.": "تفعيل/تعطيل وضع الستريمر تلقائيًا إذا كان OBS أو Split يعملان على هذا الكمبيوتر.",

"Options": "الخيارات",
"Developer Mode": "وضع المطور",

"Developer Mode exposes context menu items helpful for people writing apps using the": "وضع المطور يعرض عناصر قائمة السياق المفيدة للمطورين عند كتابة التطبيقات.",

"Hardware Acceleration": "تسريع العتاد",
"Uses your GPU to make Discord smoother. Turn this off if you are experiencing visual problems.": "يستخدم بطاقة الرسوميات (GPU) لجعل ديسكورد أكثر سلاسة. قم بإيقافه إذا واجهت مشاكل بصرية.",

"Application Test Mode": "وضع اختبار التطبيق",
"Enter your Discord application ID to enable test mode for that application.": "أدخل معرف تطبيق ديسكورد لتفعيل وضع الاختبار لهذا التطبيق.",

"Show Play Again in DMs List": "عرض 'العب مرة أخرى' في قائمة الرسائل الخاصة",
"Show Recent Activities or the “Play Again” section on desktop in Direct Messages.": "يعرض الأنشطة الأخيرة أو قسم 'العب مرة أخرى' على سطح المكتب ضمن الرسائل الخاصة.",
"Hide Personal Information": "إخفاء المعلومات الشخصية",
"Hides email, connected accounts, notes, and anonymizes number tags.": "يخفي البريد الإلكتروني، الحسابات المتصلة، الملاحظات، ويُخفي أرقام التاجات.",

"Hide Invite Links": "إخفاء روابط الدعوة",
"Recommended if you don't want random people accessing your Discord servers.": "موصى به إذا كنت لا تريد لأشخاص عشوائيين الوصول لسيرفرات ديسكورد الخاصة بك.",

"Disable Sounds": "تعطيل الأصوات",
"All sound effects will be disabled.": "سيتم تعطيل جميع التأثيرات الصوتية.",

"Disable Notifications": "تعطيل الإشعارات",
"All desktop notifications will be disabled.": "سيتم تعطيل جميع إشعارات سطح المكتب.",

"Hide Discord Window from Screen Capture": "إخفاء نافذة ديسكورد من تسجيل الشاشة",
"Hides most Discord windows from most screen capture software.": "يخفي معظم نوافذ ديسكورد من أغلب برامج تسجيل الشاشة.",
"Social Emails": "رسائل اجتماعية",
"Receive emails for friend requests, new friend suggestions, and events in your server.": "استقبل إيميلات لطلبات الصداقة، اقتراحات الأصدقاء الجدد، والفعاليات في سيرفرك.",

"Announcements and Update Emails": "رسائل التحديثات والإعلانات",
"Receive emails about product updates, our newest features, improvements and bug fixes.": "استقبل إيميلات عن تحديثات المنتج، المزايا الجديدة، التحسينات وإصلاح الأخطاء.",

"Tip Emails": "رسائل النصائح",
"Receive emails with helpful advice on how to use Discord and information on lesser known features.": "استقبل إيميلات تحتوي نصائح مفيدة لاستخدام ديسكورد ومعلومات عن المزايا الأقل شهرة.",

"Recommendations Emails": "رسائل التوصيات",
"Receive emails with recommended servers and suggested events.": "استقبل إيميلات بسيرفرات مقترحة وفعاليات موصى بها.",
"System Startup Behavior": "سلوك بدء تشغيل النظام",

"Open Discord": "فتح ديسكورد",
"Save yourself a few clicks and let Discord greet you on computer startup.": "وفّر بعض النقرات ودع ديسكورد يرحب بك عند تشغيل الكمبيوتر.",

"Start Minimized": "ابدأ مصغّرًا",
"Discord starts in the background and remains out of your way.": "يبدأ ديسكورد في الخلفية ويبقى بعيدًا عن طريقك.",

"Close Button": "زر الإغلاق",
"Keybind Settings": "إعدادات اختصارات لوحة المفاتيح",

"Minimize to Tray": "تصغير إلى شريط المهام",
"Hitting X will make Discord sit back and relax in your system tray when you close the app.": "بالضغط على X سيجلس ديسكورد في شريط المهام عند إغلاق التطبيق ويستريح هناك.",
"Unsubscribe from all marketing emails": "إلغاء الاشتراك من كل رسائل التسويق",
"This includes any emails about product updates, new features, tips on using Discord, and recommendations on new servers, events or stage channels.": "هذا يشمل أي إيميلات عن تحديثات المنتج، المزايا الجديدة، النصائح لاستخدام ديسكورد، والتوصيات عن سيرفرات أو فعاليات أو قنوات مسرحية.",
"Push Notification Inactive Timeout": "مدة خمول الإشعارات الفورية",
"Discord avoids sending push notifications to your mobile device when you are at your computer. Use this setting to control how long you need to be inactive on desktop for before you receive push notifications.": "ديسكورد يتجنب إرسال إشعارات إلى جوالك لما تكون تستخدم الكمبيوتر. هذا الإعداد يحدد كم تجلس غير نشط على الكمبيوتر قبل ما توصلك الإشعارات على الجوال.",
"Text-to-Speech Notifications": "إشعارات تحويل النص إلى كلام",
"Turn this on to have a high tech robot speak your notifications to you.": "فعّل هذا الخيار عشان روبوت تقني يقرأ لك إشعاراتك بصوت.",
"For all channels": "لكل الرومات",
"For current selected channel": "للروم الحالي فقط",
"Never": "أبداً",
"Deafen": "كتم الكل",
"Undeafen": "إلغاء كتم الكل",
"Unmute": "إلغاء الكتم",
"Camera On": "تشغيل الكاميرا",
"Camera Off": "إيقاف الكاميرا",
"Voice Disconnected": "تم فصل الصوت",
"PTT Activate": "تفعيل الضغط للتحدث",
"PTT Deactivate": "إيقاف الضغط للتحدث",
"Images larger than 10 MB will not be previewed.": "الصور الأكبر من 10 ميجابايت لن تُعرض معاينتها",
"With image descriptions": "مع وصف الصور",
"Image descriptions are used to describe images for screenreaders.": "وصف الصور يُستخدم لوصف الصور لبرامج قراءة الشاشة",
"Embeds and Link Previews": "التضمينات ومعاينات الروابط",
"Show embeds and preview website links pasted into chat": "عرض التضمينات ومعاينة روابط المواقع في الدردشة",
"Show emoji reactions on messages": "عرض ردود الإيموجي على الرسائل",
"Automatically convert emotions in your messages to emoji": "تحويل المشاعر في رسائلك تلقائيًا إلى إيموجي",
"For example, when you type :) Discord will convert it to C": "مثلاً، عند كتابة :) Discord سيحولها إلى إيموجي",
"Stickers in Autocomplete": "الملصقات في الإكمال التلقائي",
"Allows stickers to appear in your autocomplete results.": "يسمح للملصقات بالظهور في نتائج الإكمال التلقائي",
"Text box": "صندوق النص",
"Preview emoji, mentions, and markdown syntax as you type": "عرض معاينة الإيموجي والـ mentions وصياغة الماركداون أثناء الكتابة",
"Display images, videos, and lolcats": "عرض الصور والفيديوهات والـ lolcats",
"When posted as links to chat": "عند نشرها كروابط في الدردشة",
"When uploaded directly to Discord": "عند رفعها مباشرة على Discord",
"Images larger than 10 MB will not be previewed.": "الصور الأكبر من 10 ميجابايت لن تُعرض معاينتها",
"With image descriptions": "مع وصف الصور",
"Image descriptions are used to describe images for screenreaders.": "وصف الصور يُستخدم لوصف الصور لبرامج قراءة الشاشة",
"Embeds and Link Previews": "التضمينات ومعاينات الروابط",
"Show embeds and preview website links pasted into chat": "عرض التضمينات ومعاينة روابط المواقع في الدردشة",
"Show emoji reactions on messages": "عرض ردود الإيموجي على الرسائل",
"Automatically convert emotions in your messages to emoji": "تحويل المشاعر في رسائلك تلقائيًا إلى إيموجي",
"For example, when you type :) Discord will convert it to C": "مثلاً، عند كتابة :) Discord سيحولها إلى إيموجي",
"Stickers in Autocomplete": "الملصقات في الإكمال التلقائي",
"Allows stickers to appear in your autocomplete results.": "يسمح للملصقات بالظهور في نتائج الإكمال التلقائي",
"Text box": "صندوق النص",
"Preview emoji, mentions, and markdown syntax as you type": "عرض معاينة الإيموجي والـ mentions وصياغة الماركداون أثناء الكتابة",
"Lower the volume of other applications by this percent when someone is speaking. Set to 0% to completely disable global attenuation.": "يقلل صوت البرامج الثانية بنسبة معينة لما حدا يحكي. حط 0% لو تبي توقف الخاصية تمامًا.",
"When I speak": "لما أنا اتكلم",
"When others speak": "لما غيري يتكلم",
"Enable Quality of Service High Packet Priority": "تفعيل أولوية حزم Discord العالية",
"Hints to your router that the packets Discord is transmitting are high priority. Some routers or internet service providers may misbehave when this is set.": "يعطي راوترك إشارة إن حزم Discord مهمة. بعض الراوترات أو مزودي الإنترنت ممكن يشتكون لو فعلتها.",
            "Delete Server": "حذف السيرفر",
            "Allows us to use and process your information to understand and improve our services.": "يسمح لنا باستخدام ومعالجة معلوماتك لفهم خدماتنا وتحسينها.",
            "Enable Clipping": "تفعيل تسجيل المقاطع",
"Enables you to capture clips while you're streaming by using the clipping keybind.": "يُمكّنك من تسجيل المقاطع أثناء البث باستخدام مفتاح الاختصار.",
"ESC": "خروج",
"Please note that clips are currently captured at the same quality as your stream when streaming.": "يرجى ملاحظة أن المقاطع تُسجل بنفس جودة البث الحالي.",
"Clip Length": "مدة المقطع",
"By default, clips are 30 seconds long.": "افتراضيًا، مدة المقاطع 30 ثانية.",
"Clip Resolution": "دقة المقطع",
"This is the maximum resolution your clips will be recorded in.": "هذه هي أعلى دقة سيتم تسجيل المقاطع بها.",
"Clip Frame Rate": "معدل إطارات المقطع",
"This is the maximum frame rate your clips will be recorded at.": "هذا هو الحد الأقصى لمعدل الإطارات لتسجيل المقاطع.",
"Clipping Keybind": "مفتاح تسجيل المقاطع",
"Set up your keybind to capture clips. The default is ALT + C.": "قم بتعيين مفتاح لاختصار تسجيل المقاطع. الافتراضي هو ALT + C.",
"Edit Keybind": "تعديل الاختصار",
"Storage Location": "مكان التخزين",
"Choose where to store your clips.": "اختر مكان تخزين المقاطع الخاصة بك.",
"Allow my voice to be recorded in Clips": "السماح بتسجيل صوتي في المقاطع",
"By turning on this setting, your voice may be included when someone in the same voice channel uses Clips.": "بتفعيل هذا الخيار، قد يتم تضمين صوتك عندما يستخدم شخص آخر في نفس القناة الصوتية ميزة المقاطع.",
            "Invites": "الدعوات",
            "Access": "الوصول",
            "MODERATION": "الإشراف",
            "Safety Setup": "إعدادات الأمان",
            "Audit Log": "سجل التدقيق",
            "Bans": "الحظر",
            "Community Overview": "نظرة عامة على المجتمع",
            "Onboarding": "إعدادات الانضمام",
            "Enable Monetization": "تمكين الربح",
            "Server Boost Status": "حالة تعزيز السيرفر",
            "How Discord uses your data": "كيف يستخدم Discord بياناتك",
"Use data to improve Discord": "استخدام البيانات لتحسين Discord",
            "Accessibility": "سهولة الوصول",
            "Chat": "أعدادت الشات",
            "All": "الجميع",
            "Copy Image": "نسخ الصورة",
             "Add Note": "أضافة مذكرة",
             "Mute Channel": "كتم الروم",
             "Notification Settings": "إعدادات الإشعارات",
             "Edit Channel": "أعدادات الروم",
             "Duplicate Channel": "نسخ الروم",
             "Create Text Channel": "أنشاء روم جديد",
             "Channel Type": "نوع القناة",

"# Text": "نص",
"Send messages, images, GIFs, emoji, opinions, and puns": "إرسال الرسائل، الصور، الصور المتحركة (GIF)، الرموز التعبيرية، الآراء والنكات",
"Voice": "صوت",
"Hang out together with voice, video, and screen share": "التواصل مع الآخرين بالصوت والفيديو ومشاركة الشاشة",
"Forum": "منتدى",
"Create a space for organized discussions": "إنشاء مساحة للنقاشات المنظمة",
"Learn More": "اعرف المزيد",
"Announcement": "الإعلانات",
"Important updates for people in and out of the server": "تحديثات مهمة للأشخاص داخل وخارج السيرفر",
"Stage": "المرحلة",
"Host events, panels, and Q&As for an audience": "استضافة فعاليات، حلقات نقاش، وجلسات أسئلة وأجوبة للجمهور",
"Mark As Read": "وضع علامة كمقروء",
"Join Thread": "الانضمام إلى الموضوع",
"Close Thread": "إغلاق الموضوع",
"Lock Thread": "قفل الموضوع",
"Edit Thread": "تعديل الموضوع",
"Mute Thread": "كتم الموضوع",
"Anyone can invite": "يمكن لأي شخص دعوة الآخرين",
             "Private Channel": "جعل القناة خاصة",
             "More": "المزيد",
             "View Server As Role": "عرض السيرفر كرول",
             "": "",
            "Save Image": "حفظ الصورة",
            "Copy Link": "نسخ رابط الصورة",
            "Open Link": "فتح في المتصفح",
            "Add Reaction": "أضافة تعابير",
            "Delete Message": "حذف الرسالة!؟",
            "Are you sure you want to delete this message?": "هل انت متاكد من حذف هذه الرسالة من المحدثات !!",
            "All": "الجميع",
            "Accept": "قبول الصداقة",
            "Start Voice Call": "أتصل في صديقك",
            "Start Video Call": "أتصل فيديو ",
            "Pinned Messages": "تثبيت المحدثات",
            "Add Friends to DM": "إضافة أصدقاء إلى الرسائل الخاصة",
            "Hide User Profile": "اخفاء اليوزر",
            "Edit Message": "تعديل الرسالة",
            "Reply": "الرد",
            "Forward": "إعادة الإرسال",
            "Copy Text": "نسخ النص",
            "Pin Message": "تثبيت الرسالة",
            "Apps": "التطبيقات",
            "Mark Unread": "وضع علامة كغير مقروء",
            "Copy Message Link": "نسخ رابط الرسالة",
            "Speak Message": "قراءة الرسالة",
            "All": "الجميع",
            "Accept Friend Request": "قبول الصداقة",
            "Search": "قائمة البحث",
            "ٌReceived": "تم الاستلام",
            "Friends": "",
            "Shop": "متجر الديسكورد",
            "Nitro Home": "قائمة النيترو",
            "Learn more": "مزيد من المعلومات",
            "In-game rewards (aka Quests)": "المكافآت داخل اللعبة (المهام)",
            "Use data to personalize my Discord experience": "استخدام البيانات لتخصيص تجربتي على Discord",
            "Use data to make Discord work": "استخدام البيانات لجعل Discord يعمل بشكل أفضل",
            "Request your data": "اطلب بياناتك",
            "Request all of my data": "اطلب كل بياناتي",
            "Windows Settings": "إعدادات الويندوز",
            "Streamer Mode": "وضع البث 🎥",
            "Billing": "فواتير الشراء"
        };

    }


    start() {
        console.log("DiscordArabicTranslator Loaded!");

        // مراقبة DOM للترجمة
        this.observer = new MutationObserver(this.translateDOM.bind(this));
        this.observer.observe(document.body, { childList: true, subtree: true });
        this.translateDOM(); 

        // إنشاء حاوية للأزرار أسفل الشاشة
        this.buttonContainer = document.createElement("div");
        this.buttonContainer.style.position = "fixed";
        this.buttonContainer.style.bottom = "20px";
        this.buttonContainer.style.right = "20px";
        this.buttonContainer.style.display = "flex";
        this.buttonContainer.style.gap = "10px";
        this.buttonContainer.style.zIndex = "9999";
        document.body.appendChild(this.buttonContainer);

        // زر PayPal
        this.createButton("https://www.paypalobjects.com/webstatic/icon/pp258.png", "https://paypal.me/V1store?locale.x=ar_EG&country.x=SA");

        // زر Discord
        this.createButton("https://static.vecteezy.com/system/resources/thumbnails/018/930/718/small_2x/discord-logo-discord-icon-transparent-free-png.png", "https://discord.gg/vi3myl");

        // زر YouTube
        this.createButton("https://www.pngplay.com/wp-content/uploads/13/YouTube-Background-PNG.png", "https://www.youtube.com/vi3myl");
    }

    stop() {
        console.log("DiscordArabicTranslator Stopped!");
        if (this.observer) this.observer.disconnect();
        if (this.buttonContainer) this.buttonContainer.remove();
    }

    translateDOM() {
        const allElements = document.querySelectorAll("*");
        allElements.forEach(el => {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                const text = el.childNodes[0].textContent;
                if (text && this.arabicTranslations[text]) {
                    el.childNodes[0].textContent = this.arabicTranslations[text];
                }
            }
            if (el instanceof HTMLInputElement && el.placeholder) {
                const ph = el.placeholder;
                if (this.arabicTranslations[ph]) el.placeholder = this.arabicTranslations[ph];
            }
            if (el instanceof HTMLButtonElement && el.textContent) {
                const btn = el.textContent;
                if (this.arabicTranslations[btn]) el.textContent = this.arabicTranslations[btn];
            }
        });
    }

    createButton(iconUrl, link) {
        const btn = document.createElement("img");
        btn.src = iconUrl;
        btn.style.width = "32px";
        btn.style.height = "32px";
        btn.style.cursor = "pointer";
        btn.onclick = () => window.open(link, "_blank");
        this.buttonContainer.appendChild(btn);
    }
}

module.exports = DiscordArabicTranslator;