/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1ebe67905f6f95f5264720095165f8c6"],["/archives/2019/index.html","833c0e50474fba06c3a3d97c06e081d7"],["/archives/2020/01/index.html","090823e6ca25b322f85bcb7da666ba45"],["/archives/2020/01/page/2/index.html","558a80d55a3c169e2ec2b04d8626725e"],["/archives/2020/01/page/3/index.html","5da7ef4148025c054e3a353ad0050dab"],["/archives/2020/01/page/4/index.html","afc039fb76cf4700fedba43d2107517d"],["/archives/2020/01/page/5/index.html","fd389a4a05aea38be1d296aab6bc70ca"],["/archives/2020/01/page/6/index.html","6f29fcc45e61bab0e5f5901a28510b9a"],["/archives/2020/02/index.html","a3312ddcd0b1ee593a8d775a3f904e87"],["/archives/2020/02/page/2/index.html","ae98e81c7d6877c0f812f7b85b345aea"],["/archives/2020/02/page/3/index.html","a552bcff362d3c8ac68dee005cb05caa"],["/archives/2020/03/index.html","98c958649e2e3fca46edbe04776bfa9b"],["/archives/2020/03/page/2/index.html","22532deb692200c58f0a68b10bc8fa30"],["/archives/2020/04/index.html","325bf15e4c575e712faa1e5640a8be53"],["/archives/2020/04/page/2/index.html","0f05b7583f2e42a9e95907f859876614"],["/archives/2020/05/index.html","74057d84150d155e8c775d9fc93bd343"],["/archives/2020/05/page/2/index.html","dd2106d391676e9a7467f9df45e9a8b2"],["/archives/2020/06/index.html","db982b934a58954b0f13a6afb01f8cb6"],["/archives/2020/07/index.html","741174bb2adccd95a6cd169f888b40b4"],["/archives/2020/07/page/2/index.html","b7b4e0c093314b37fcef370811147ad8"],["/archives/2020/08/index.html","480666cd3fe830f58aedb37cbd491c53"],["/archives/2020/10/index.html","907a0da8cf5b1d2bb5c926ba88c0e9f6"],["/archives/2020/11/index.html","e854098d3c673de734bb6eb4e554eba2"],["/archives/2020/12/index.html","3b2fff63ca2061bbaf4464f46dca9ffb"],["/archives/2020/index.html","933aa5faf7a6b7103252503e691f1cf5"],["/archives/2020/page/10/index.html","75bac3c483a61c29e086d490bc0db1b7"],["/archives/2020/page/11/index.html","4bf288ac4fc0b8f2210fdb8c97136950"],["/archives/2020/page/12/index.html","a10d41c4f53ab163d114d4a7575224cf"],["/archives/2020/page/13/index.html","5d8a3b05e4dafe9b84ba550f26629989"],["/archives/2020/page/14/index.html","6a21b3e97fad985ee2805be7adeb5f1e"],["/archives/2020/page/15/index.html","97f07d79cd4eb23991905872108f9f0e"],["/archives/2020/page/16/index.html","70193678e8944f9505842007693db128"],["/archives/2020/page/2/index.html","ddb7c15d12c7eb3852a681df9354f1fc"],["/archives/2020/page/3/index.html","a12c9d92570ea789180bc07fbe284bcc"],["/archives/2020/page/4/index.html","2c96b389a50713ef29b8860cbab24d75"],["/archives/2020/page/5/index.html","b9256f2bc3d0d97d79f6e18a68f75b12"],["/archives/2020/page/6/index.html","7aeb04daa31920ad64279d3259a760a7"],["/archives/2020/page/7/index.html","91c7c68da9c28fe338f43564d279c9e5"],["/archives/2020/page/8/index.html","ce7c879ccf3b3ac5c76daa99f1edf431"],["/archives/2020/page/9/index.html","9d34ea85e8324c72423100b2b8143e87"],["/archives/2021/01/index.html","e907e7860828f7f13c556392720f7fd9"],["/archives/2021/02/index.html","a727cc3068f4654c390a141b6467ecba"],["/archives/2021/03/index.html","6a38710f91923a0d9fc32751876944d9"],["/archives/2021/04/index.html","ac61bb720cb8ef81f489d99e8b408ab9"],["/archives/2021/index.html","054e5ddf2ba646988f624d172a329380"],["/archives/2021/page/2/index.html","efea259caf991784c13addffe7014b56"],["/archives/2021/page/3/index.html","e94563ab6a984fdcfebed0d87fe2bb0d"],["/archives/index.html","ffc80788cf9240db36f853233e045e4e"],["/archives/page/10/index.html","a2c8213e1eb94a0b97c6907123acc44f"],["/archives/page/11/index.html","d9d0d9b8365aedb31f1a0f3bab0edfa1"],["/archives/page/12/index.html","c61c4356129b6d38ba28e240ca2deb0e"],["/archives/page/13/index.html","b6ad24ad88a3061ae339a27a81eaad63"],["/archives/page/14/index.html","1c198acef4d1fc49d9b49f1de5595b05"],["/archives/page/15/index.html","686e5432331f4667c2e81be6c9db30dd"],["/archives/page/16/index.html","fdbea900e3bf1fc997cc269de861ddbd"],["/archives/page/17/index.html","7c05d9ff0da3f6f123e853ba7835e7f4"],["/archives/page/18/index.html","3beb5e39ce66ed5b9cfe5c2db5a4b1c7"],["/archives/page/19/index.html","7a9e8c05af6bdc551ee84fa28fc560e4"],["/archives/page/2/index.html","b7cad7dc3a8c5f833515275be89ee695"],["/archives/page/3/index.html","5e5c98d7b89ef951688e9bc021ea7d9c"],["/archives/page/4/index.html","b3f3e174d808eaff335e588e01495c3e"],["/archives/page/5/index.html","b6e475dfdfcaa1022a2b78e8d8073ba7"],["/archives/page/6/index.html","c99fdfd47adb513529431a4bdf3bdedf"],["/archives/page/7/index.html","a95a26b503cc5bc28d719531090182b0"],["/archives/page/8/index.html","f826ae5e86ee5d3eb3726757c6c514c4"],["/archives/page/9/index.html","b72adea813a9010ccd05a067d42fb283"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","bd58c4fc414a8caaacce866c5347b9e5"],["/categories/Linux/page/2/index.html","29f8b51668319a2ec33ccc9bb7bd8725"],["/categories/Python/index.html","2c5590fb03b5c80a81a4772910ac427c"],["/categories/Unity/index.html","bd48a5b163056a08f662af1b5f788173"],["/categories/c/index.html","c6a263169b1ca59a763f15f270879662"],["/categories/html/index.html","7f33f0b23057fc1a0f7dfb9747e60048"],["/categories/index.html","b7d7f013aae3393f3ae36f28969e91be"],["/categories/java/index.html","d75c85db24c28f846e7a817b496202fb"],["/categories/java/page/2/index.html","e74ba34ecf81678ba54af8f7768b0688"],["/categories/java/page/3/index.html","6b6cf836c2e4b8685f19786190cd5a9d"],["/categories/js/index.html","8ea26f0a86f4d90df69497c3c67191c6"],["/categories/next/index.html","627a17aae6242231187680505de4321d"],["/categories/stl/index.html","2d4f8dcc021d91f15af252a66ef32b78"],["/categories/windows/index.html","894d1eb201f2d3bf8a2cd67ed96b42ba"],["/categories/基础/c/index.html","6d9f6a868284c114e08c2e14454c59fb"],["/categories/基础/index.html","ecd2ec8996f1c1883621603c7c455570"],["/categories/基础/page/2/index.html","dab2807652e35c9f0446c02a541f430f"],["/categories/并行/index.html","2a8a2f1475eb41440277ba6696dbd8a8"],["/categories/数学/index.html","cfab8366b55bfb30ea4ed516a183caa1"],["/categories/数学/概率论/index.html","a0ebcd1a95179d77b8d858a1512126ab"],["/categories/数据库/MySQL/index.html","011aac00a36b3bc3f7cc2e19eb448585"],["/categories/数据库/index.html","fe064ce7185ed18dc1d32d59ea6f85ae"],["/categories/数据结构/index.html","e374a05fb87bf914aa3c92f3ac98f0cf"],["/categories/数据结构/算法/index.html","8b56293766cf4fc3a088beb77b6d77a8"],["/categories/机器学习/index.html","235c132e793261e78787385a0e0cf501"],["/categories/杂项/index.html","e1df847118ea7543fd046835a93101ad"],["/categories/汇编/AT-T/index.html","218e3da94de6da273dd1f4d47291529e"],["/categories/汇编/index.html","edfc8f477e02b5ff0c8d9e7735c53259"],["/categories/汇编/page/2/index.html","387b1fdc8a0f1660247eb6ee9e41ce86"],["/categories/汇编/page/3/index.html","8f3459f26fd215f4535a247b06333ef4"],["/categories/算法/index.html","22a52f625863b348e03422ed3e41253f"],["/categories/算法/page/2/index.html","06bf7401a787bd2b0f2c279c366f99a8"],["/categories/算法/page/3/index.html","81c20d8312ee2e34deb6e0de8c312a5b"],["/categories/网络/index.html","7387b8e68e93237c09a011a5c3d559fd"],["/categories/计算机系统基础/index.html","1f183d7478b4abcc04d55e6cb359a28e"],["/categories/计算机系统基础/page/2/index.html","6f91e489ea732c57781bed995e48b0ae"],["/categories/逆向/index.html","db5dff93d140abca235568f91604c923"],["/categories/逻辑电路/index.html","b7cbe4d85459057b8436c8bd8293045f"],["/css/background.css","8cddac1f24f0f734fcec280495fd160b"],["/css/index.css","779f61c8c1b448225e33a0a30297c4c0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/漂亮行楷字体.ttf","2d252f361cb5bfe1f0b607c07143b506"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/时序电路10.png","a1c552571987118b7be43072d06698cc"],["/images/时序电路11.png","f48e512d2ffb7fe905c14eff4419c3b1"],["/images/时序电路2.png","a97ce56f602f5ebdc40ded148829ee53"],["/images/时序电路3.png","4a44556ede70ac3247a7a6302babdd48"],["/images/时序电路4.png","dd3a9b392604b1a4eef3a50e9e3c5529"],["/images/时序电路5.png","e504561f49f83e4c5901b087b62ab800"],["/images/时序电路6.png","2929c1e70186d9a9fed5d3e869bfa72a"],["/images/时序电路7.png","3a1bebaf06949581fdadd35ebae31777"],["/images/时序电路8.png","743b216b1a976f6c4e3b829db61919e6"],["/images/时序电路9.png","d799f6b0fe3bb272d0519b3cb1f2c7a0"],["/images/时序逻辑设计1.png","606b96f849348c83941fccb8864833c3"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a497c9d9b9c4f34cdb9ee8ca1a8b01ef"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","0040e561abf5670cb9ef4ddc9a263745"],["/page/11/index.html","dff4d37a77fb6eaf9f3b828ebe9058fb"],["/page/12/index.html","10546cc5fc8fb6fd597e0aee8f6aa4e8"],["/page/13/index.html","282d780f7650f2f67250e17406069d1f"],["/page/14/index.html","63f9f66db4f06d05518772a33f5de55e"],["/page/15/index.html","459f3f6ba28fbb927a8c0f20e397b9bc"],["/page/16/index.html","15a357309a2613107e829522dc982702"],["/page/17/index.html","af42b92d8996d6462ab6d328811ee75a"],["/page/18/index.html","efd310b465f9f04381ecddae27f2d49c"],["/page/19/index.html","fdca27625cd3cb034a401b93cd82c553"],["/page/2/index.html","4c297810fc68b59b39bfa2f9b020a08c"],["/page/3/index.html","377eff1755d84f867f13e3209f64a5e7"],["/page/4/index.html","43d944dd52905ed9e1505a5de2aaf138"],["/page/5/index.html","f83cbdb8afa1bcd5713cf9feff07b467"],["/page/6/index.html","e53cac4e02962a4275672a77fb2808c6"],["/page/7/index.html","35be8f41eca28f94ef6aacc1f1ea9158"],["/page/8/index.html","e3d7b003e42571ae917950edce891876"],["/page/9/index.html","9bc954fb696c0a763b27bfd325534a6e"],["/post/10919.html","864c3e79c7b04889f46e1a433fa733e4"],["/post/11051.html","021fa5de7199434d0e3aaf94dd820c3e"],["/post/11306.html","9af1ed13394f5cba3a43565491a485f6"],["/post/11491.html","5303ea126c51038fca5638bdae644889"],["/post/11799.html","54e1e8b364a916b802775e433b07c82e"],["/post/12334.html","bcf7ddd94cf42ee449bcf5796f00a320"],["/post/1326.html","2955e0b89116fe284b888cd1697396f7"],["/post/14379.html","cd59e067d3d8a196749bbbe30fbbd37f"],["/post/14511.html","26414ae61c816d1f4b928a479765eeff"],["/post/15201.html","88cbb1b0b2207daf42c14af9a911c5fb"],["/post/15425.html","0c855af8549faf6c55aa230b948f9d7e"],["/post/16107.html","7ea30a5e6c9b6be48e2cd20e2314d822"],["/post/16e2846c.html","f548b26bed9a621d8db37335a72e8a0c"],["/post/17862176.html","a2b7668119c7db3e4c7094f16c0f7572"],["/post/17ad67a8.html","3b6ddbbe1522a9fdab6807c521d37367"],["/post/18431.html","b1313e23821e2f928860f4ef7d8e3bbf"],["/post/18912.html","9f230852a2650dd897f93b0c821b01b7"],["/post/1b9c8662.html","e29f0a4d98de8a50d6cb0f65f5e1fd75"],["/post/20198.html","fabe58ab4e8b9c04141db92704e99368"],["/post/20ff5ccb.html","bfef0ccc280f27845b25093b813ee399"],["/post/21624.html","0761fac24f4bd8d54221bd7b8ae783bb"],["/post/2170659a.html","7392abc4b506259124d6f450144b881d"],["/post/22102.html","75d966efd32bc75ca88d41b2f71802cb"],["/post/22493.html","bb194e151a092f92d470e9eb88424326"],["/post/235252ea.html","3d83de0b93bbb5ec1f2979033563c88c"],["/post/25699.html","496f3ac7ffd88929deafd2538ed36e06"],["/post/2647.html","c57e5cb0d282c36e2a6a8aadf743d74d"],["/post/26477.html","9460e6bfa4278fdb3f31af1c90b0ed74"],["/post/26671.html","da60396623b26d41eb2bed326eb8cac0"],["/post/26737.html","f47bc64f8e97ad4ac968577e500ac410"],["/post/27045.html","a1e3fd6626ef3bda4256daa195a250fa"],["/post/27621.html","cbcc1435f2693d4bbaa05cf5b54439e1"],["/post/27890.html","0a6d16cbee7050a39f25ee8429ac277c"],["/post/27980.html","9c015b4d451ed4464d16c7b8f916c8d7"],["/post/280b588e.html","7975a2d486a4601fafbdcc23f80d338e"],["/post/28579.html","ec89a5c0de8337439113609103a0b667"],["/post/28877bf.html","56e2bcb597fee9a450ffb6893d486450"],["/post/28954.html","b48df8482f71b3cc77b5ae74f16c5c1a"],["/post/29378.html","30ccea219f509f1afdd7d75d98bb5822"],["/post/29949.html","69c8d65bf022036f7cb33a0b1086f90d"],["/post/2ae43b86.html","0df02e2bff1c6c56f15b3445005f64a1"],["/post/2ba82a45.html","bbc3363ef882002992bd1fa39e13beda"],["/post/2cad8b04.html","cbac0a40161f651a44ab494153ee58b6"],["/post/30072.html","e92ecdcaf0a3d2ef2607899986b8b531"],["/post/30479.html","cf32e4a245a6a85a553e4c5644910146"],["/post/30a5dc7e.html","6f7f1977c86d9083cd54169d965d6739"],["/post/31a6b40.html","a014cb2eaeb0fe2a5135f12c018d803b"],["/post/325cdbf2.html","d30bdc7fafd92511dc91210aaea5f8df"],["/post/3319ed9a.html","7c5398a841233691ed073bfc247647d0"],["/post/3320.html","d2d925c2c2c5b68e98cf59d65e70aaac"],["/post/33cb1151.html","16ff8418ba9d0d42067cdee966f92b02"],["/post/34811d5f.html","6a20940111b852a2dae8c7a00e9869b8"],["/post/348d4e04.html","de7ca357199e60e275542f5557e9ba0c"],["/post/3526.html","38728d3c9f7a4cb2588fedef4651e55f"],["/post/35532.html","d35487ae3b693ce936d2c5165fb6175c"],["/post/35848.html","664cd55772b6d0fd7c8adf51abbea8d8"],["/post/37318.html","8541106ba0a095cea8d66a866f3e8a24"],["/post/37663.html","8513d7e84c053d475e76a63e048121a1"],["/post/38035.html","61ff6c5be70c607a526e93140821d6f0"],["/post/38072.html","0c7500d0cc80bf4fc082d87875c87d7a"],["/post/38145.html","070ff29bb07dc40c23529b6e2c333a66"],["/post/39968.html","d8bc1adc9851aaba9a0fca34a3ec27cf"],["/post/3de4bc69.html","2e70ac9f256b524a63649763a55039b4"],["/post/40583.html","3cecb94f5f99eebfb5621e784d3f9037"],["/post/40997091.html","2a47df4a79cd1bb2eb4f631dfffb5fdc"],["/post/41129.html","6f350fdbb0897dfc4a45ee9a72c97e9d"],["/post/41763.html","b02081f8190d939e7be3de83a25c30d9"],["/post/41829.html","a3f2e63dfeb5a618d505b9d2be413374"],["/post/41840.html","6ae93809522e33ecd0d9a008a4da9e04"],["/post/41e39f2b.html","76f47063d6f3ccaa48c45ac19180c5a3"],["/post/43003.html","dd613363123818abbb174c925b37c64c"],["/post/43817.html","bf3f501695ccef6a2f37edda2c3a1910"],["/post/43878.html","30353e08ec79444b498dd856461ed4c7"],["/post/44250.html","34a53c961f506964789b490f39992590"],["/post/44336.html","8a4a394ab27b0ca6ff921cd21d8ebe80"],["/post/44454.html","be7c96bf06c904582bc1ee487ef4e37c"],["/post/44487.html","ecda2cc715cc3b8177c7bd9cb2b7dfb4"],["/post/44914.html","49cae50f51900b384a71b0790d892490"],["/post/4551c130.html","12fffcf37c63f7399238c20d35454128"],["/post/455a4c92.html","30c3ba97f11ed96e5a3a0c769b8903fb"],["/post/46390b34.html","2535deaee88aa6ab99ed37ae5e486e2a"],["/post/46466.html","07e4b833b9732fe8c0052347ae389d97"],["/post/46925.html","877ecf797db9e280b78786044a4468d8"],["/post/47075.html","a0d408304df3dd64d6a241a1c36179c3"],["/post/48220.html","5c6d1441d3f4f67b760a33474c754f36"],["/post/4b1879e3.html","916d1ee659764117a3fcd44c21202191"],["/post/4c720881.html","d16f9048590ccb9234cd05858c44ccef"],["/post/4f4fc0a1.html","fd529c6ff6ef9331b10d9dfed50a757f"],["/post/50daec4.html","3797323189c4005c4135e58cf2fa6671"],["/post/51491.html","f6845b781aab02eefa750b5e08caf2da"],["/post/51e63dcf.html","9ddd3ef13973eaec7b09cb14b3a12b4a"],["/post/52078.html","0bab46cdab1556e9adbb558d32b8a959"],["/post/53677394.html","bc91130c5c2099cff330e023baf49821"],["/post/54300.html","d1fe90dd3e3e104721c7633853eed9b8"],["/post/54612.html","3fa07f663d7c87c6db43ed1e6d7cdde5"],["/post/54613.html","47e3bce6bb670aaf07ea48aba0f86de3"],["/post/54708.html","49c9cd96cdc6407be77e6134e465cc3f"],["/post/54778.html","e58322960b766875cc685d89f857b366"],["/post/5490.html","a5d94c512424925da6c4c86267446ea8"],["/post/55046.html","dec5eaf88926bbab18d9ee468ca86725"],["/post/56929.html","f331652f51c33f2548a7e5c27913632d"],["/post/57339.html","4aecfa73f7ec6d0add542347b700cc57"],["/post/57449.html","a9a989168d74934881f8575af3d6497e"],["/post/57453.html","db4a3c1f8cc1d08252c37cdc7402bfcc"],["/post/57671.html","a31177dbd857935246280eb43ea90847"],["/post/58313.html","1e23d664be2f93bd3544387550001aaa"],["/post/58481.html","f9bdab231c4d4a1f49ec69409bb1898d"],["/post/58986.html","4e063b098a980ec8d00f021ed799ec66"],["/post/59431.html","48787104ce0775f3b24efeeaf7007027"],["/post/5951da65.html","192fbad419b26e39291bbbb3058a987a"],["/post/5be7e977.html","00fbbd9a5752dac9f66bf14f1d309e2c"],["/post/5f9e4eff.html","0563cc80a4da28ea92647c62a37e1e3b"],["/post/604b49d0.html","6bafe1a2020d2c7fa2261d93d43e5acd"],["/post/61312.html","729d3cc64714ebaf2b9e8c55e259b5c0"],["/post/61738.html","51a0a00ad70d50865410b4a51297c27f"],["/post/61809.html","a8d87eb85b288e98927b48cedf12ffdc"],["/post/61eaf19a.html","3992b75a9141ef1fe9eb3350f1bb889b"],["/post/63002.html","fba365b396ef095e1f0732b7c03eee91"],["/post/63711.html","890ffbf305926591badd26182f18cab1"],["/post/6587.html","4b2f30411291d4c9d4f4f6e6a597beaa"],["/post/6589.html","0729809687ba7db9aef998381b550975"],["/post/67454659.html","5adb24930bb1218cdaf48a72c944172c"],["/post/6880.html","49828359084193b9118d3d23014c6ad7"],["/post/6ee50502.html","2cca543f1c54a481d2f073711062cbc5"],["/post/70263071.html","5ab754697d579d9288ab7a62cee9265d"],["/post/70d4f4af.html","19a7a29e6afaa80c48e8ffcbbb69bb7e"],["/post/71038564.html","20d7b5377f48d6df1f1e47fe49b545dc"],["/post/7119.html","dbb406907e8c42404b70833ec756e67f"],["/post/74e7fdff.html","388a295dc063cf138ab0deb767b12233"],["/post/7502.html","2d56ee94c638ad62a4e3850f0a6602cf"],["/post/75223936.html","ee22b1c530de2b61480a968c515f24e9"],["/post/7564.html","3607db63574ea1d9b2fcd0cbe5e781a1"],["/post/766f9b60.html","cfe691b9b3c3efaa1273e08df63442a7"],["/post/769365ef.html","e9424345ed2649cf33f592610d568993"],["/post/7ca31f7.html","65082eb510a12e07939762d05e8e849e"],["/post/7d1c86da.html","39dd2941ad8446a89e3305f5e87167e5"],["/post/7f3bcd7f.html","2739014a4633cdddb05ad59491a53ba5"],["/post/8039.html","6b5d80d865364b4392b39f1046ac36d4"],["/post/8050.html","542a6430a91ac131c26467aad5c0d15d"],["/post/8072.html","f663335c53ec79df0ec3164a0bd328b0"],["/post/8274.html","90abdec71a6b1bc1b8cd17f0026363ee"],["/post/8372.html","a0b4937ac2145be20b1e5dba3bead60e"],["/post/8498.html","bcb028d265447d47c369e658adbe231b"],["/post/84ea90f7.html","32c6d445b47a444a8d46552bf642a00d"],["/post/85b4e13b.html","706aac002819555c03a4f2d25801b0b0"],["/post/8e75958d.html","2c0dc1240dc3b58ca02a0bbc214850a9"],["/post/912b2566.html","8e3c3cd64faf4a2b58a646a84d605273"],["/post/9187.html","4fb085ae0753d212891e8f4f4c30d8a3"],["/post/9197.html","4abb4a0b63c82b26981d7f209c3062ef"],["/post/94ceb2fd.html","713ae731daa0497d8e7100982cf8259a"],["/post/95495db.html","148ed74db75a01c124aefbc27873df6c"],["/post/97246020.html","3d3361e1cce0471134498f2b30b03c67"],["/post/9954ba8e.html","2bf52b103715a4ced99f0ea8f0ffba17"],["/post/9d855db5.html","193fedffc75bcee50a66bd6466a8a4d8"],["/post/a3a786d6.html","984f56762ef9e2fe2e7c9f004dbea358"],["/post/a444b428.html","77c989ec2f47d79b4cf2a96c123a2134"],["/post/a50b8908.html","59b054c83d9a41b6b107a29ebefea580"],["/post/aa1eade8.html","01bd18a9ba0cb9e477313f7412846a12"],["/post/ade8c6d6.html","d251397f041fc5bdd9924e3510d7a1ad"],["/post/ae8362df.html","9b7de620484b061ba4a3c795d6814fb2"],["/post/af3eed3c.html","760618e9e11856aedc11156a53f6b01a"],["/post/b4c1d206.html","41e2d5c9fa675597d57427ecaa374026"],["/post/b75632a1.html","6696336aa293a0c835801879105da95f"],["/post/bb25e9a9.html","2e6b44d9a1679f73cad311afd0de4184"],["/post/bcc68732.html","f952cbd97f4cb38f713b1121dbcc8744"],["/post/bcf345af.html","8c2683abb1ed2ea8810a379bf7da3e7a"],["/post/bd608ff7.html","69846da2ea305f6e54b1b1d1d25ee0fb"],["/post/c82a1c99.html","9b10c8e514aed79c5c56626452a4e97e"],["/post/d213fc7f.html","23e63167d4f9caf95e7e426288b89b21"],["/post/d431fab4.html","38c3e1bffcb9b6e8cd60a33db07ae134"],["/post/d5381517.html","802b111b9993ee8237d000d0f78f721f"],["/post/d94f88de.html","73e8f7cc8568ab75375e27e7be961b1c"],["/post/e058ffd8.html","35d2cb68869a00772a69f83a70820a6a"],["/post/e0f8cb74.html","d14c14cddf2ffd3652b12d0dd84e9375"],["/post/eefe591f.html","2f6e4ce54835d0937265c3d307de054b"],["/post/ef296a07.html","0d36dd1fbb561b2b867236cd513a5800"],["/post/ef3a3fcc.html","e3772ae8c58f5051479abaa0f0cacaaf"],["/post/f201f9fd.html","6ca21f5900a8bdff443a750915d7ca16"],["/post/f79e4123.html","e5eba55402d48f9e93081e9c14b18186"],["/post/f8648a1d.html","77ed2243fb8b9293ec105a3287d61e22"],["/post/f89cb603.html","ac5a0adfba695d0d8a627af0ef204cad"],["/post/fa288682.html","0508f97f2cbff42d3ab2c4e06e5738c3"],["/post/fb98053e.html","843fc8a8e569eee4179f5c1647e0791b"],["/sw-register.js","d9b6871428a840a1350db6ca0dbab062"],["/tags/AT-T/index.html","927ab03452287cf13ba789a7f5ed25b7"],["/tags/index.html","be01e26f5b4edf806012c4c5d1b54cb3"],["/tags/动态规划/index.html","4b59128fd4147a9cb365abe42743b1b4"],["/tags/字符串/index.html","de724a229f8a305ec1fd8a96c0443f82"],["/tags/字符常量/index.html","a6ea045c07d1165c4ef2821eb90c3801"],["/tags/快排/index.html","0ee223960109ed3b1d08cb987713b897"],["/tags/排序/index.html","72e6130adc6ed6bfb7eab9c00b198058"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
