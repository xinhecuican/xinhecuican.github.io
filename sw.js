/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","c89c7365c5bbd22cfdf3f6b3e2e96752"],["/archives/2019/index.html","a58530097bbc7cd33c23baf8862a39a4"],["/archives/2020/01/index.html","279da2ad7c6e550b53bfc0537261abc0"],["/archives/2020/01/page/2/index.html","14fa9164cebf69639653d3d57b64207b"],["/archives/2020/01/page/3/index.html","1e3fedf35a60e3dbcff1c9fdf7473415"],["/archives/2020/01/page/4/index.html","e2dc459ebf69d773c0d29e14426a204f"],["/archives/2020/01/page/5/index.html","9fd47430c605bdf5617eb7e98b0aca68"],["/archives/2020/01/page/6/index.html","aacd6d29fd8975eed0dbecfa80f65a45"],["/archives/2020/02/index.html","ed799257bd4ecb697edb05a681f7880a"],["/archives/2020/02/page/2/index.html","affab15c329b51d2afb7c8cde03e3202"],["/archives/2020/02/page/3/index.html","50136e2ca64d502b75a37c28a25ca17a"],["/archives/2020/03/index.html","97af89b67ca8da9b9f44817a5cc3146c"],["/archives/2020/03/page/2/index.html","27dbb085f56f18442a11e006a8ae7b3e"],["/archives/2020/04/index.html","36a934909d356dbd1888aaaa3a739eae"],["/archives/2020/04/page/2/index.html","8d55429b3be9bb8f41575eea8b76acef"],["/archives/2020/05/index.html","ae00ed4aea0d4a1147ba3be0fd971c52"],["/archives/2020/05/page/2/index.html","3aae5ce7547c3aeed8a259478886dd0f"],["/archives/2020/06/index.html","075e0218dc4f38ae0f11990b703ebe51"],["/archives/2020/07/index.html","d545de12ce047a8207aae6b4856ef67c"],["/archives/2020/07/page/2/index.html","6c29b1aa4ec3b8476a379503cd311cbd"],["/archives/2020/08/index.html","7a7be8e1a4b395f9bbcdd4664430ae22"],["/archives/2020/10/index.html","ba4eddef812678561b2bc247bed4b8d9"],["/archives/2020/11/index.html","8f86d47856e05d769b90794adc54b892"],["/archives/2020/12/index.html","2f0267864a290050988ebb53307c110d"],["/archives/2020/index.html","03921df89b14fd51355e45b6563e9aff"],["/archives/2020/page/10/index.html","2c4949a1c1f7ce48ce2dd2a784a331ce"],["/archives/2020/page/11/index.html","9ed5d5678d498a02b25f36f58a374317"],["/archives/2020/page/12/index.html","cbc90f603c25e9a54f7cf239b3d823eb"],["/archives/2020/page/13/index.html","420fa804c233a61513a25d3d697c605a"],["/archives/2020/page/14/index.html","9ad81e4cdfbf6c01819c1ce03378ce93"],["/archives/2020/page/15/index.html","dea28fed46e9610d0a5989ec9222057c"],["/archives/2020/page/16/index.html","d134c9a5859457a2be87c8f9fae715b0"],["/archives/2020/page/2/index.html","b125d38e07c5adcbdcf7f16bca33ace7"],["/archives/2020/page/3/index.html","3a62585f781bfa7ad1a8af7e862c5b25"],["/archives/2020/page/4/index.html","b3c118a5770869fc42d4af2de7c90cbf"],["/archives/2020/page/5/index.html","cd46bfddef000bb55e1b938072517cfa"],["/archives/2020/page/6/index.html","fe163de70f58bbf4be52f8925414f9e1"],["/archives/2020/page/7/index.html","9048257a9e6c179e75bc8bade143e47c"],["/archives/2020/page/8/index.html","272ff8b0a80b9d502d9857ea5412f2f7"],["/archives/2020/page/9/index.html","0fe829fa5fac8b73303ed68f8f17daf4"],["/archives/2021/01/index.html","af81361b709a41c885ab0a76a7e932e7"],["/archives/2021/02/index.html","44758344a4e87507b79044b51380304c"],["/archives/2021/03/index.html","59e37310223413a9b7575ab8b393a379"],["/archives/2021/04/index.html","a44db687683a91e9c4e6d1ed2ea23ac4"],["/archives/2021/index.html","3a5c04a4e539ed678c5e5035698a3524"],["/archives/2021/page/2/index.html","cd1cf6316ead0ceb36267add67f17a77"],["/archives/2021/page/3/index.html","15b973fc96d5e3a450dcdf44e4596666"],["/archives/index.html","0ae383544d8ca39a0d35b16412a069b5"],["/archives/page/10/index.html","1834f96979ac7d9da74a4099277f4900"],["/archives/page/11/index.html","e65ff7086f1744f057e12485415c078e"],["/archives/page/12/index.html","6896d56d56a41270f351243193a7d6c4"],["/archives/page/13/index.html","03fdf30ad767ba86f6e9229058285302"],["/archives/page/14/index.html","4ad1f04934bb623d3d8f172605dfe8d3"],["/archives/page/15/index.html","a5a232835d6ed3ad1eae5ff1665e20fc"],["/archives/page/16/index.html","f3339ed0ba2ffb270eb0887e61490bca"],["/archives/page/17/index.html","c1091e4a28f902e8194169fdf2a4cf97"],["/archives/page/18/index.html","49f37d55c5cc666c5ce92529c0094ec0"],["/archives/page/19/index.html","003a98f427ad6ead300ae4b9705e3b09"],["/archives/page/2/index.html","30c7847e320060749540ac5ac0d23d6d"],["/archives/page/3/index.html","637625e1701f86ff0d385f214b71ca93"],["/archives/page/4/index.html","66513063e6a23963ec2fc84556d5087c"],["/archives/page/5/index.html","27d99f35517819046194fd155aedac5d"],["/archives/page/6/index.html","d0ff4fe38e8a840c394f2b77f01658b8"],["/archives/page/7/index.html","9b303a8a7a21dc5bbfdc7e7b32c5f444"],["/archives/page/8/index.html","50c5b5a3bf466154efaffac6d3e25b77"],["/archives/page/9/index.html","8aee8b35490302bc02e40d1968557f7e"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","26d743e9e0eeba40743a44807b776c96"],["/categories/Linux/page/2/index.html","9b7def13336f4990b01b6e0b7c2dad38"],["/categories/Python/index.html","79e168969d738195361aa53ed566981c"],["/categories/Unity/index.html","cb14cdb732bb4bf1e5249794f11cf5a0"],["/categories/c/index.html","57b848822170280adf94cce74d9eb1b4"],["/categories/html/index.html","8f0c34eebc8a2655a82d18189431323c"],["/categories/index.html","8755d781b343ff21cb0891fee983c373"],["/categories/java/index.html","ad5b8ab92a1f21f8d71da49f86a29c21"],["/categories/java/page/2/index.html","28577cc8286d393d4db89d777a3cb5cc"],["/categories/java/page/3/index.html","3672dd25e9a04e410f9a8192d17f34bb"],["/categories/js/index.html","5697d5ba4e00bc2e1e8526587e5eee6f"],["/categories/next/index.html","8505f1634fc1095187c01d186abb5fb2"],["/categories/stl/index.html","3fad4d6a552379aaa1d929af37f28353"],["/categories/windows/index.html","c73a77d82a543e20aa1b3447371db968"],["/categories/基础/c/index.html","8906129bbf0e5bda5da553fbaa82217a"],["/categories/基础/index.html","2e4bdee032b65604e86ea999c96767c6"],["/categories/基础/page/2/index.html","b53852f46aabb2793a35422253ae2a39"],["/categories/并行/index.html","8786f64c9c32d7dd5d200919f3d1ec84"],["/categories/并行计算/index.html","e969676dff398749b81eb94936a04794"],["/categories/数学/index.html","c8605888f7335d2280f382c9ac392c8b"],["/categories/数学/概率论/index.html","b054113184b256166f965cc93586c3e3"],["/categories/数据库/MySQL/index.html","10e166befde58086a5bdc31d2e3a9639"],["/categories/数据库/index.html","ae8566fb734b0ea407b0786919de39ca"],["/categories/数据结构/index.html","f4515ef2a3003facc884f0ea838b4a23"],["/categories/数据结构/算法/index.html","b23f407ec753d0cdb92aead072fadaf9"],["/categories/机器学习/index.html","2c2eaf4a3684f09ed2d31f58515709e3"],["/categories/杂项/index.html","ede0f732372791e3760f514b3edeb462"],["/categories/汇编/AT-T/index.html","af2e11bf11c4f76198bbece754f3c7a0"],["/categories/汇编/index.html","e740d32fbc0cf4b3b124bf645e72635d"],["/categories/汇编/page/2/index.html","24da3eb11d9f629a705c240e05b8c6e1"],["/categories/汇编/page/3/index.html","632853b005cb20a13a5863051ecbb29a"],["/categories/算法/index.html","131fb940e7095bf7e5a257b792e332e4"],["/categories/算法/page/2/index.html","f546f73a3ee5d37b09e06f3339077ecc"],["/categories/算法/page/3/index.html","a1e605c81d46a432a1e923c869a5c1e8"],["/categories/网络/index.html","59c4284a83c5403f38ea658b6d38e745"],["/categories/计算机系统基础/index.html","243117ac81317ba1ec9ac3bd3f24210d"],["/categories/计算机系统基础/page/2/index.html","2a029cc48c788e223690cccebe2764b6"],["/categories/逆向/index.html","86144a692fb5b8833236910c2f9a1dab"],["/categories/逻辑电路/index.html","2720fde863d57551e141256581bdfb1c"],["/css/background.css","2c8612158e42088b891f59480ae6d785"],["/css/index.css","779f61c8c1b448225e33a0a30297c4c0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Snell-Roundhand字体.ttf","2ec54ef3411fd027522c5f1b8b6fe726"],["/fonts/漂亮行楷字体.ttf","2d252f361cb5bfe1f0b607c07143b506"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/Hadoop1.jpg","18b1041a29f02839281a1cd61c0a542e"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/dadoop2.png","80332f4c9dc01e3deb00675a60bc5d78"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/hadoop3.jpg","ce9820e347660721fb4dc8a068407777"],["/images/hadoop4.jpg","5710682f4f0e6f4cb50a1bb5842282f2"],["/images/hadoop6.png","9654ec71e75a28d0426d858b9fb03cb2"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/spark1.png","74e891699488b94886cfc28b98ecb199"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/时序电路10.png","a1c552571987118b7be43072d06698cc"],["/images/时序电路11.png","f48e512d2ffb7fe905c14eff4419c3b1"],["/images/时序电路2.png","a97ce56f602f5ebdc40ded148829ee53"],["/images/时序电路3.png","4a44556ede70ac3247a7a6302babdd48"],["/images/时序电路4.png","dd3a9b392604b1a4eef3a50e9e3c5529"],["/images/时序电路5.png","e504561f49f83e4c5901b087b62ab800"],["/images/时序电路6.png","2929c1e70186d9a9fed5d3e869bfa72a"],["/images/时序电路7.png","3a1bebaf06949581fdadd35ebae31777"],["/images/时序电路8.png","743b216b1a976f6c4e3b829db61919e6"],["/images/时序电路9.png","d799f6b0fe3bb272d0519b3cb1f2c7a0"],["/images/时序逻辑设计1.png","606b96f849348c83941fccb8864833c3"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d659bfd24d378968d14f6269ad297f97"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","ec7f5f4d5224430d1d7dec473d3705ac"],["/page/11/index.html","96ee1632137f8ad94f96ef63af0c002c"],["/page/12/index.html","438476364deba6d6a9df7b541bd8f751"],["/page/13/index.html","bb19d5d86c010dcc42a848a79e6ed979"],["/page/14/index.html","17d62639b7330627b9c5db276f7e345d"],["/page/15/index.html","d6f243a17eb0e68ff860d27f94bac067"],["/page/16/index.html","d478a5e46dbdb21f486fdf982cef829a"],["/page/17/index.html","4fb3d5cec953af573fc719968c27d657"],["/page/18/index.html","3d0246aa5e70c89e4a00d765d11e3871"],["/page/19/index.html","94e0c5cdedd8f26c3a81144365b1817a"],["/page/2/index.html","dc5eceff36e987baf7cf2c58c866d39b"],["/page/3/index.html","2895a85d6b36ef57e71f54a835aef2cd"],["/page/4/index.html","59f4d121647ef7053bf15d0290db5c85"],["/page/5/index.html","4d26e9052a954af9ed4e49546354ee7f"],["/page/6/index.html","73344de68bf27f7d658c8b6b868e312a"],["/page/7/index.html","f648df87b44fbfa8f7121c8b5fdceb55"],["/page/8/index.html","2b3d851e4056c5cef2294718733016af"],["/page/9/index.html","90afec7f88851570918c1a9297d899ca"],["/post/10919.html","815825563f2c49e253476ebc2125877a"],["/post/11051.html","986fcc50209481746b560ccff6a21093"],["/post/11306.html","6a8bfc5553f5618f8135152e77b238e3"],["/post/11491.html","61565e8cb82746a3fca3353247d26bb3"],["/post/11799.html","ce6c7697239c249bcdfddb2640c6c8ed"],["/post/12334.html","eb48c4b240f7f7dc33b01f3decfbd680"],["/post/1326.html","13b313ea2fb6fb7cf5f824b069c651c4"],["/post/14379.html","7dd2a87d0ad2a1f1628291c21df74545"],["/post/14511.html","a7aeebb4fb25ed21c8713b474551b03c"],["/post/15201.html","9b0c2c1d8b56d18527c7dc3aea935378"],["/post/15425.html","d14a17b7d556be229be935a7ea03b4b2"],["/post/16107.html","b26f465ed43f17246fd099f28498a002"],["/post/16e2846c.html","053e044f2df011798c9f28aa352c345b"],["/post/17862176.html","e148f863ba2b270628de21f80cc8baf0"],["/post/17ad67a8.html","2b5349b1d3d7ad4e08f624d812122dc6"],["/post/18431.html","afe7b3228d9889b193cf7d5c907bda67"],["/post/18912.html","495fec807d74613a30298cf0a4c29e1d"],["/post/1b9c8662.html","8fcbc2a23cb7fb7abe19cc58ac91508d"],["/post/20198.html","fdba3143c8b2a9c3fb76c514e7e91baf"],["/post/20ff5ccb.html","48be31c2bc22652b03877592269babbb"],["/post/21624.html","98ef2f418d12d45f9e2952e3d7f60614"],["/post/2170659a.html","0041f09bc398ae0e7d51e6afac21eb79"],["/post/22102.html","0c8415fdcd34b63add01e01a4c914a53"],["/post/22493.html","5571bd4ef533280e7d069433963e6fd9"],["/post/235252ea.html","235381b3b3004660b10ab5d351b3d727"],["/post/25699.html","b1baf24329616488ac842e47bbbf5eee"],["/post/2647.html","4f2bf3bba684fefcf2a68e2d80b07349"],["/post/26477.html","47b1b8775fd16f587bdadc91b9aea5f4"],["/post/26671.html","bd672421d7eed4c616e4b544a538ccbd"],["/post/26737.html","0ad16600a834eb1aeecd4de93c5b35b4"],["/post/27045.html","4d8c19709ea222122494c94eb97d0871"],["/post/27621.html","53c7f532cf04b85ad0bb5fa48ad4c1ae"],["/post/27890.html","ed47820e045e33eca5363f4f2d14211a"],["/post/27980.html","400def386c3789e8d62d5a28f676f057"],["/post/280b588e.html","0ad1ccfb7f54117079c126e2282fdc22"],["/post/28579.html","19b19cb9e99b170869f0325838a62b45"],["/post/28877bf.html","d9a7591ef0731c8fc326cdc6fc533757"],["/post/28954.html","6d8a81ff713619461eb37acb534252b8"],["/post/29378.html","d91812fd517a756a831d206e1c002424"],["/post/29949.html","4d5fc6379546df86ce98b6cf46072050"],["/post/2ae43b86.html","6a17258f3f986a48b51457cd99b735e6"],["/post/2ba82a45.html","7610fbdd07c604298993ad7dd775b688"],["/post/2cad8b04.html","37f0529ba24f7ae0ee73c2721dde933d"],["/post/30072.html","1eac9a7156ba0139dc774b853ef9647f"],["/post/30479.html","a3082adf04eb988e077b8d57873d4941"],["/post/30a5dc7e.html","79d12d2a76be843169e549ef698c020c"],["/post/31a6b40.html","8bf4344556f6d946c994bb6957acd29e"],["/post/325cdbf2.html","fc6e0056933afd25b7143f920b4d772a"],["/post/3319ed9a.html","0f6243c56855afda839a08b55eaa2cf4"],["/post/3320.html","d21e4f4fc4522a933f751cc824a8ec4e"],["/post/33cb1151.html","e4dd43479d9cae58aacdcc0f6fca0841"],["/post/34811d5f.html","219e3134c43d418df369bf2dc8faf819"],["/post/348d4e04.html","9056263d3ee7dc3f6b7d5a1727521834"],["/post/3526.html","3daecdaca8d2ef5e25cd10af6c2d85c8"],["/post/35532.html","135ba401fa72acb31846541858716b09"],["/post/35848.html","f78d957e9d208274841405bdbf86fe09"],["/post/37318.html","17be332d8485e07bacc8c0d4f2dcbaa3"],["/post/37663.html","812b368d304529c6e68f9ed8bb097cfe"],["/post/38035.html","dea458460a0dbfc7e9f865115838093f"],["/post/38072.html","6ca6118e49851da6722d2ef045cf2984"],["/post/38145.html","c21bf60bf2182b0c1e871f5a109cd32b"],["/post/39968.html","db75eb4c33d019b5f4cec5fd4d686bc9"],["/post/3de4bc69.html","20ee9b0b34947d50c3529851afc14f6f"],["/post/40583.html","5af61dea2267ac527e2b71b836ff5c00"],["/post/40997091.html","ee141c4bf9afda5b0cd559b4e265f822"],["/post/41129.html","aa40ad3a967c77c15d116df820a3aaab"],["/post/41763.html","654d060b8a57b4b0237e50a7f89ab686"],["/post/41829.html","812f1160b8c9486315ecde5a8d6e087a"],["/post/41840.html","8c2d68bb87ac1ae654d96c6340394f62"],["/post/41e39f2b.html","5d58e6b1c1877bfa9f873d84af7dbc3f"],["/post/43003.html","e08158dc2d1c15dafa604774f0bc279b"],["/post/43817.html","755d67a25413ccfc72041dfb7a8c8d23"],["/post/43878.html","1d881fd956642f40ef7198903393701f"],["/post/44250.html","16043b54e6ba6d149a8aeda561c906a8"],["/post/44336.html","a693f27a9fdc4ded1e34634a32626fbb"],["/post/44454.html","f19e2ce1d6cc5cdffa3fbd8775be013d"],["/post/44487.html","ef191fab94bb7f62202f4778d4deb342"],["/post/44914.html","d0ce8ec7f3402b123c0847c620370d61"],["/post/4551c130.html","44c8c160d531f35387f9bdcffeffb9e2"],["/post/455a4c92.html","d9bcf6a707ebf22fa1427fce944c670e"],["/post/46390b34.html","8940f09ec407f7627b6821b32c9fc802"],["/post/46466.html","f2ad0f3b8a83da67b9b8b0f02158e3ab"],["/post/46925.html","6d803dc993e2558b18778941ea661c85"],["/post/47075.html","f62e7a5c9ff86e6f9b583f5bcf2aad4c"],["/post/48220.html","2525c422617febf6718bb153e76b3b1e"],["/post/4b1879e3.html","5a30e679488f59bffe8a4e7f57b38a9a"],["/post/4c720881.html","73c7ee0d2dac3defdde80eb3650aafad"],["/post/4f4fc0a1.html","726648443f97f95ae284a19911573585"],["/post/50daec4.html","ddd4b73f87a520b7e419abcfa0b2f5f9"],["/post/51491.html","bdc6879064fc8b4ab60fe2bfe4c0a6e9"],["/post/51e63dcf.html","e8dda00a1a9229b1b509efdccab076df"],["/post/52078.html","7847ad0c25adc8b6b2cfcd5c2a37e6e5"],["/post/53677394.html","371fc843ba03169e9f29f96208db57f7"],["/post/54300.html","d40ae8c2a1efc71db80e6a27f29ed57f"],["/post/54612.html","11003530db34f12ec146a34b456ca4e0"],["/post/54613.html","efccfb9e36113391bdbfb5fdf85c32d3"],["/post/54708.html","0c0980d719e8fc08a90c82a3834fe44a"],["/post/54778.html","fb42634fd92ef4ad433b2b24c454d8b7"],["/post/5490.html","fb22afdcee1f6b8652c41904b59d2070"],["/post/55046.html","6bfd7849bb4b6a3e2467fa3395462247"],["/post/56929.html","f12381ea716bf11c3ee148e850eaa247"],["/post/57339.html","2355905db1cb4477649fddfc1e111b6c"],["/post/57449.html","a96d0a1d1e85253117fdff412fcd8543"],["/post/57453.html","233b629acfe422124cc5a9e9c91eec58"],["/post/57671.html","1b3044257ec57d29fdffc6be13927589"],["/post/58313.html","7135337cd2d09dff7cef6e109741a0ca"],["/post/58481.html","79200efd1f78dfe5054ce823df100e07"],["/post/58986.html","cf3152b0547c5aba369309aba77ba4bf"],["/post/59431.html","ec282d4e20e09ac8c46eda4fd6093f9f"],["/post/5951da65.html","28a1cf5da934dfa15a4f48342af9a9ab"],["/post/5be7e977.html","07b6f41ab2c205418b378039a1cda402"],["/post/5f9e4eff.html","6498c6a927573df1a285c75b3d7da0b0"],["/post/604b49d0.html","f5b2dd4326ad2a0656a684ef062e03a7"],["/post/61312.html","49acdb0aa4a13e66a9d1f76805a3a9e9"],["/post/61738.html","49dde56e3642dc183abf2f2ca3341f67"],["/post/61809.html","849112f02cf2617f428064e74bada2f3"],["/post/61eaf19a.html","affdc9c6771bd8f182bac4d0b33a98da"],["/post/63002.html","1afea98cff31bfc21172367b6bab42a1"],["/post/63711.html","4c7b1693e54ad2f837c6bc07f8597936"],["/post/6587.html","7258ed41ce136e77b83459e9f2046d79"],["/post/6589.html","1f9a4feb3892bcbe85d9885e021317f4"],["/post/67454659.html","b7091a4d275b2d546ee34e8319a2f334"],["/post/6880.html","06b7cc0a5de3e4265eb8732089bb67d2"],["/post/6ee50502.html","c959cc8a5a5a0088e22f70ed81cdb955"],["/post/70263071.html","f194638af63f4b8450c3f80df27d203c"],["/post/70d4f4af.html","98103d3d614540f79bf4de434353c42d"],["/post/71038564.html","6390f1e6d0716bdb2db2f0456effd88e"],["/post/7119.html","81e426ea92310179d23797788f12a79d"],["/post/74e7fdff.html","ebc28fa7d72cdfb6c351700102027e5d"],["/post/7502.html","4c27c59e322a23c6ff18eeb522a3b76b"],["/post/75223936.html","a70931d5c2a7284a40c4d0689fd5fa91"],["/post/7564.html","ed217ae98ce085596c0da8fffb38dce9"],["/post/766f9b60.html","72332f65f1c0edb70d3925dc51b7f148"],["/post/769365ef.html","145b7470c3d85f7c20f3de2954fbcc46"],["/post/7ca31f7.html","9740c66829077dab0c067c0fefb38986"],["/post/7d1c86da.html","feae7826b43aa83f83a8d1bb71aac3dd"],["/post/7f3bcd7f.html","e9002fa9aba3778583b4aec88e205df6"],["/post/8039.html","e849ba919222351f1cdfb1d1be8061f1"],["/post/8050.html","25eb1d6ed17d25f08492731b9f0a3cb9"],["/post/8072.html","09f31d93516e4a0dfe4b5f13c8161cef"],["/post/8274.html","0847d253724dbdf456499d37e95d1b82"],["/post/8372.html","1107cd675c1062c4f11220d294d9157f"],["/post/8498.html","d4d877c40c9d3442baeb190535e106e5"],["/post/84ea90f7.html","c80bc2e34d1751f0e226bbf23e66a548"],["/post/85b4e13b.html","35ecb21a9008e87616107019865a16a9"],["/post/8e75958d.html","93037558228fb08f3b27bf940bd92642"],["/post/8ecb5fd.html","8c3ea35d143a3017f256b754aa769843"],["/post/912b2566.html","bc1640127ccf10d7cc5221792b7ad73e"],["/post/9187.html","ab7063e39e6c3e50843024bb7ee6d5a3"],["/post/9197.html","2a20be20a5ec79857b82fe19a465fc7a"],["/post/94ceb2fd.html","56bcb8d53c2fd93cdbcc02f2b62d6f95"],["/post/95495db.html","b29248bf639723186f07ebd04f06ea5b"],["/post/97246020.html","9eccfade113ebc82210912f698e384cf"],["/post/9954ba8e.html","fd3101951cf27b9639ec124469361c67"],["/post/9d855db5.html","3957d8a068292c67d921f4862df1a427"],["/post/a3a786d6.html","0c798736c51fe4860afa913359473898"],["/post/a444b428.html","d8f0d55b2658ac28650e45b618ce3b7a"],["/post/a50b8908.html","4a4f9bb0e099b52a83d9e436e52d7a34"],["/post/aa1eade8.html","41e0c6e80c4fee676cd5e9a3448a6e58"],["/post/ade8c6d6.html","1ab2a977048f380488c752374f2735b8"],["/post/ae8362df.html","deeec7478fa9927b08ebe5a1c1da01af"],["/post/af3eed3c.html","3dc4e6a6f86cf34750c8aacb05ce65ec"],["/post/b4c1d206.html","3c77d5b5d51344a45a0aba4b85867de2"],["/post/b75632a1.html","7857db820eaed5cd67bc7e27715fa7e6"],["/post/bb25e9a9.html","fd5a159ed1bdd2d0566f290d0c1fb04d"],["/post/bcc68732.html","b369114bdf1f5cf502e1818d81c61205"],["/post/bcf345af.html","ca2a61a76da303cd26b8e9f468d91ac2"],["/post/bd608ff7.html","242f2e990e8f64ab33f9379424a793f4"],["/post/c82a1c99.html","234a19c8ea365da66d58d245efaa4878"],["/post/d213fc7f.html","127b21da9f4bd3790479c45f16b41e9c"],["/post/d431fab4.html","fa5a29ffda26bb0cf197155b9e10e1b6"],["/post/d5381517.html","be3f33b4e8241616a306f9e8a707e353"],["/post/d94f88de.html","d5cfc263462a1ed4f3321f6c308bb443"],["/post/e058ffd8.html","2edb37f86e62e81f80c855509562631f"],["/post/e0f8cb74.html","f4e279d7bbcd93f014e4423ae50141ae"],["/post/eefe591f.html","0348eb01bf8fcd07e8b65d11cab7718b"],["/post/ef296a07.html","9fe87fdcd6d7246f2414c6ce5c11cf0d"],["/post/ef3a3fcc.html","6c5f3ff9c8309aae4e4092eecaa35f3f"],["/post/f201f9fd.html","9f214c147046fded462f58a5dcd6a083"],["/post/f79e4123.html","9bf3e08d74032d138f27bea76e6685db"],["/post/f8648a1d.html","555f0a6002c947de515dbcb0e407e6b0"],["/post/f89cb603.html","4ccf7d827880c8b6721ec20b331892fe"],["/post/fa288682.html","188845ac5e620f8d76cfb1577aee74c9"],["/post/fb98053e.html","5960fb667055ea6cccb1d40732f0fb11"],["/sw-register.js","9effadee330f66fd51633294cdb48525"],["/tags/AT-T/index.html","690a0b59fc02c7aef905d51ce9837916"],["/tags/index.html","cab8e30dd43644453b7b5ed753468f15"],["/tags/动态规划/index.html","7122302634b3306b9a43f90cec57ef9d"],["/tags/字符串/index.html","ae2441f73f24ee3bfee6a2aff976a9d6"],["/tags/字符常量/index.html","15ed264d5fa9b76d66ea4a1ee683bba9"],["/tags/快排/index.html","59a8fe3a96eacab1160f5ee81b576f52"],["/tags/排序/index.html","12ee391a82366a5466d75e6af6afa0cf"]];
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
