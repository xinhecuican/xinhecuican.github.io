/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","8a2ce372d21d1d8732e8a78414ba06aa"],["/archives/2019/index.html","18ac07cf1dfa2ff6903300edfe54b42a"],["/archives/2020/01/index.html","1172de9ea2a0b85bcbf3345cbeb0b302"],["/archives/2020/01/page/2/index.html","afe644e12b16a4f122195e7fd7577df2"],["/archives/2020/01/page/3/index.html","8f48b825bd55bdd5371081fa8d095df3"],["/archives/2020/01/page/4/index.html","8198e118c7758a307d4aa94fd73e698b"],["/archives/2020/01/page/5/index.html","5f61ec8840b695ca3e62f186bff5e83f"],["/archives/2020/01/page/6/index.html","d6f5aea2679c2f69b2b267e97279185d"],["/archives/2020/02/index.html","dc4b9315520a26d1967d1cf7f55eb34a"],["/archives/2020/02/page/2/index.html","d28c180813ddf19c6f977748f6d13a1f"],["/archives/2020/02/page/3/index.html","12e92ef734f0aca177dee12f60823698"],["/archives/2020/03/index.html","673ef97655be89d8c908811d2390014e"],["/archives/2020/03/page/2/index.html","45fbc7b7019ae07093559c6160772da7"],["/archives/2020/04/index.html","48ab0f556f1e15dfc5134fcaaf3700de"],["/archives/2020/04/page/2/index.html","f78182b956ea05c9285e9c590b604505"],["/archives/2020/05/index.html","02a5f6a4a8d0d6fe6b5532833ba181e1"],["/archives/2020/05/page/2/index.html","ecd033f08f8f52ecf7d36d5cb9396fad"],["/archives/2020/06/index.html","ce1dbd1f2530054a4250553d1b91c2dc"],["/archives/2020/07/index.html","073677629a481397a7a26532d56ca187"],["/archives/2020/07/page/2/index.html","41431ed9f6030629440b336393c250b6"],["/archives/2020/08/index.html","a22d426413c084443a197771e33bd67d"],["/archives/2020/10/index.html","4ecd5e5938faf82b9e7b0fd32b52f5a6"],["/archives/2020/11/index.html","4f355d11c979f057c6759d71da0a3b33"],["/archives/2020/12/index.html","0567bbeaaea8495d49ac7ef747491b36"],["/archives/2020/index.html","c0e9bf1dcfab63eddc9bb2ff2be29e35"],["/archives/2020/page/10/index.html","6f191745a2316f56df00f6796a6a1392"],["/archives/2020/page/11/index.html","aae093b0dc737d60d8832dd6b4a185d5"],["/archives/2020/page/12/index.html","93d80a26b2eb0e871fa611ead35059dd"],["/archives/2020/page/13/index.html","6b2f6b3e824861ae688087ebc48b28fe"],["/archives/2020/page/14/index.html","a101c7b33959033037ac44efaae87a5c"],["/archives/2020/page/15/index.html","9482e99e7402e3aea095b53e6c384f3b"],["/archives/2020/page/16/index.html","7593e55eb9537665b5ce36a442497b94"],["/archives/2020/page/2/index.html","ac656a88d8e3024a07c1c101cdc025b5"],["/archives/2020/page/3/index.html","2a36ef6ed7cdd45226a52edb5dc2d176"],["/archives/2020/page/4/index.html","4a0657b72f52874d8a013dd0cae5f5d4"],["/archives/2020/page/5/index.html","209587b0f215fa81c251f97922fec224"],["/archives/2020/page/6/index.html","c8f2fab1b695882034fd69041a69c032"],["/archives/2020/page/7/index.html","d7fff40c15125e87935c779fa43f45ed"],["/archives/2020/page/8/index.html","025ddf82b3f210b9fa1e57c2b1405b93"],["/archives/2020/page/9/index.html","3c8f7f4fb19a96a6c06af30ca13d0ab5"],["/archives/2021/01/index.html","59463cabc58afffbab79f97aeb1f6548"],["/archives/2021/02/index.html","b9d8a2061e802fb73a9cf7c71ffb9f88"],["/archives/2021/03/index.html","f0235e36f909144779cd5d8f0d4ea6c2"],["/archives/2021/04/index.html","ee62fa03471f9486281bb2033300b1ff"],["/archives/2021/index.html","fc8d50983e2726a5a883ede82e23561b"],["/archives/2021/page/2/index.html","14ebee53006f62847f9445465a2e6170"],["/archives/index.html","9434d1e247199045b516aac27453c173"],["/archives/page/10/index.html","ffdc0b1232923ebc8ba1f4ad3f25a1ea"],["/archives/page/11/index.html","a661524afcae6533dc09d93447317bb9"],["/archives/page/12/index.html","64004a608fcc53bf75a69d340d492648"],["/archives/page/13/index.html","2633c335561c99c025de4e7ee5e820a4"],["/archives/page/14/index.html","0be1ede50882f10722b52386e72aa8cb"],["/archives/page/15/index.html","e0cf3c3ae66a3b15580035ef63c7fa79"],["/archives/page/16/index.html","a1b1de7b95e8c8deb4abcb5cf9483f61"],["/archives/page/17/index.html","d2f6c74467f4d4f87516d37b0b13cb06"],["/archives/page/18/index.html","6f0333bec89180ac6f5c8a1f5cb4c4f2"],["/archives/page/19/index.html","e4ab8c13e52e51afa21c3fa3fa19778a"],["/archives/page/2/index.html","13bf7415ac608a891d1cc0f30ad93f7d"],["/archives/page/3/index.html","1dfdab746b869bb80740882332cf1882"],["/archives/page/4/index.html","c9b7e7eaa06e25720cc74f2a77cf9453"],["/archives/page/5/index.html","b7b08e1def06a0c4851d4d112a22d3fa"],["/archives/page/6/index.html","d42ed7fc367e0f0c2115737d66e8aaa8"],["/archives/page/7/index.html","59070044503eaf8976aa3ceba0213276"],["/archives/page/8/index.html","422abd57f72d3442491fec68f3042969"],["/archives/page/9/index.html","a3d5941eb2fd9f1ee91f1d0649d77a10"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","a1a6af635abb8eebba228794a6efc547"],["/categories/Linux/page/2/index.html","75549131924b12828a7279069fceb48f"],["/categories/Python/index.html","4061df22277233d5c1853d17c1469ffc"],["/categories/Unity/index.html","611ea28cf46ff98f432955d3949b276a"],["/categories/c/index.html","e6a5c94b1f44f0114155f46c671065aa"],["/categories/html/index.html","920b5bacdd26acbf1d6e6fde5bef66e6"],["/categories/index.html","d24b01390ac141d5aec01ffcf502a787"],["/categories/java/index.html","632e2249ae4fb9676d9e58996ced2e7c"],["/categories/java/page/2/index.html","04d1e81fea3b58a8ab1b038d55a08cee"],["/categories/java/page/3/index.html","80c6d44994894b297cd6736fdd033fdd"],["/categories/js/index.html","d873471d9b6e7da147130eba917adc09"],["/categories/next/index.html","26a9cc2ade601af333eaae554a32c7b6"],["/categories/stl/index.html","f39e39234be03b1b0e4418c682aeb570"],["/categories/windows/index.html","736ff675d4b63c5059b43466fcce03fd"],["/categories/基础/c/index.html","70a4ac1e47d88bae8098dd0c50eb2b51"],["/categories/基础/index.html","9bd54a72ff69d96e13700fd8ffe59ae7"],["/categories/基础/page/2/index.html","9577a017bbe2de26bc522ee4ee21f17c"],["/categories/并行/index.html","31d9c00afe1af13dcc5c15b9f515afe7"],["/categories/数学/index.html","80e55dfa0a6965af2f320a74a0811354"],["/categories/数学/概率论/index.html","6195bccc6e6497680f738599a6e11187"],["/categories/数据库/MySQL/index.html","121442a17fb49aac2799f1d768b35839"],["/categories/数据库/index.html","0420c3725e6a5ae0ba6923598b0789bf"],["/categories/数据结构/index.html","8e3f75b7bfa8bda95d6695710e7c4547"],["/categories/数据结构/算法/index.html","a47f099e8795c87d1c4871595a7f5471"],["/categories/机器学习/index.html","dc77852a4e45186146a6067f4a434d94"],["/categories/杂项/index.html","adf867a9a07d76f7205d019fc6ead06f"],["/categories/汇编/AT-T/index.html","d5eb8f118cdfb2b2cb78416fb4a05383"],["/categories/汇编/index.html","1436e373d402bb9436ee66856bf61a6d"],["/categories/汇编/page/2/index.html","8e63c89d611101c744ce5648a2ea606b"],["/categories/汇编/page/3/index.html","e16fc8512e587c5de1077670e180a358"],["/categories/算法/index.html","1667370e7b3e58e329bd127dab692e53"],["/categories/算法/page/2/index.html","fd69a046bf8d5c1394f00e1b37380dd9"],["/categories/算法/page/3/index.html","8a0fda86ad9ce97ff81cad6c219030bf"],["/categories/网络/index.html","6e3187d21bc2a9f2ddf302bb4c542c47"],["/categories/计算机系统基础/index.html","ce0068898ed3cb3af223f76fd6a9f36f"],["/categories/计算机系统基础/page/2/index.html","cf69ba8fbee7de22d84453259a3913f2"],["/categories/逆向/index.html","bf064e88b7674fde91c7c195cd6b86a9"],["/categories/逻辑电路/index.html","d74aeef5cee98271c4a4860673d5fbf5"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","feea9d04c652a68e59d6c3c1b3380cef"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","ea2d067a6833a1663d296e97a89aad07"],["/page/11/index.html","9ac29c2ca57c06a59d6394b93bca659e"],["/page/12/index.html","71a2ce454e63f21385f86b84a1888021"],["/page/13/index.html","8dbb49f2583a8c7048345dadd44b9ff7"],["/page/14/index.html","b82ca72967af7952b54150e6ddaf3bbb"],["/page/15/index.html","7f1020e67866d5955da47ec1e9effffa"],["/page/16/index.html","b223eba467b9f986660448aa68a0cd9f"],["/page/17/index.html","b3c7f814bbf5bc44ef998942d602c2be"],["/page/18/index.html","d6bf7ef9115dd1084332608361eeb3e0"],["/page/19/index.html","17f673a391bf49ddc951b219684e7a4b"],["/page/2/index.html","eeedeb07ebe4de423da4aa272ac0f748"],["/page/3/index.html","f762ca1199987b0aa8dcadbc58e96116"],["/page/4/index.html","90e5db625bf19a9e36f4aa35958fbebf"],["/page/5/index.html","678234ea7abc35ea076623bb0a181b0b"],["/page/6/index.html","501b18a80f5a97c425b2ac778a4da05e"],["/page/7/index.html","eee1a26e9c298a90786e34c5d6b39fc6"],["/page/8/index.html","abbbc12d6efe92b51b1fe7e9f3e3809e"],["/page/9/index.html","7c4a0a89c5a8881d847f59e7b8bcf191"],["/post/10919.html","23b60455baee0d9a74b10c8c05d380c0"],["/post/11051.html","0d35c7d4c99d4ec873dd0d54b3504467"],["/post/11306.html","516f0d3721cda0b16d6e4cf83f71d2c1"],["/post/11491.html","a573cb3ef9405f30d5f3f31f4e88519f"],["/post/11799.html","925682dd8b2b84c2e7072a32baddcff1"],["/post/12334.html","eb37259518e9276cb5f36034d1f61c04"],["/post/1326.html","1bc41080ea574ae2d2e6e3764ce873a4"],["/post/14379.html","c71f90230e1e9ae46c11a078949aab52"],["/post/14511.html","fc94d5865ede01a10ce5f975802052a5"],["/post/15201.html","4d898a92bca6dae00777a2387772b675"],["/post/15425.html","f6bac01b86bac12b20823c2844797096"],["/post/16107.html","0a8f5cc2a6f8de3714020dc0772df4b6"],["/post/16e2846c.html","a2f6744fb4a65a8458acfed6dbcd186a"],["/post/17862176.html","8e4c51928c7ef7b26b0f42980c16052f"],["/post/17ad67a8.html","a5762737ae3e6c73f94988475c20c276"],["/post/18431.html","42df809327877d42c7d87b0ad1607d5b"],["/post/18912.html","9a4a58e4e812605975ff57084c4b1c7c"],["/post/1b9c8662.html","a8d339187cc18989cba275d2c91bc424"],["/post/20198.html","1087f03573e323ba30ec19a4532f7931"],["/post/20ff5ccb.html","11ca361d6c66b97c75e483268545e5a8"],["/post/21624.html","e7192785ec86daeb921beb478cf59a76"],["/post/2170659a.html","1a7dcb2d530a9ec2d9b8b97f269eb540"],["/post/22102.html","2593d5d1c6619623efd60656dd8d92a5"],["/post/22493.html","dbeba250dbc34dde5675848bc707b6d4"],["/post/235252ea.html","5c9f9cd38372d457580d6b1a4993eb1d"],["/post/25699.html","24d481ebb5080d139b8cd79828333fab"],["/post/2647.html","992033f9a227a2db5794acdcf8c5edb2"],["/post/26477.html","cb13f33d268198fb642a0eef90cbbe20"],["/post/26671.html","fbcfb1c02899cc07633932a9752fdd83"],["/post/26737.html","3ec155bdce6e397d3f86c08d6d403b26"],["/post/27045.html","a5aaae087c8a975908a8c35a3a80f910"],["/post/27621.html","6434f05eca462d04998bd2085c04de57"],["/post/27890.html","93a68e9243a06a6d33b2fdbee3a4f6bd"],["/post/27980.html","d4140806876c6bdb0963cd46ac931306"],["/post/280b588e.html","f5141c6296de90988f974d2284e44df1"],["/post/28579.html","10ca57ebde4412ba887f21388d99d5a9"],["/post/28877bf.html","d0660484ae50b6cf5b091398c4bcd643"],["/post/28954.html","331c690aca20db0780d332be9935b4db"],["/post/29378.html","bccfb5457d172cca88733cc78fccfed3"],["/post/29949.html","a33f84d4b9d6cc5c24544340ad7279ae"],["/post/2ae43b86.html","df1375319ffde0dc53c166d764a8f7c1"],["/post/2ba82a45.html","36fe2d32c07f7569df91dbf86f8a6a30"],["/post/2cad8b04.html","16f35d4f96a94e61476b3c419d810441"],["/post/30072.html","c46d71cb669e663c9f4496e67ca423b9"],["/post/30479.html","affb7a79fb69615ad6b2d52e31bd0492"],["/post/31a6b40.html","efe93fa0887db3c192a602cd654450c9"],["/post/325cdbf2.html","eccedfc96de450a1717d117c128be46f"],["/post/3319ed9a.html","a1f53adbd4df8e48eeacaefdf94b06d9"],["/post/3320.html","88ab91830155146b713d914f947bc36e"],["/post/33cb1151.html","e5acef4347097a7c7d98a5b54092769d"],["/post/34811d5f.html","becbe2d58133c77c33ff86448c5433e5"],["/post/348d4e04.html","51e5362f86a45f39e2a2bd0e9693ccc7"],["/post/3526.html","9e9f2466b5f8eef45f7d7b4c0f096128"],["/post/35532.html","46e699797770f43631ffde9c29e8b243"],["/post/35848.html","700a3e70a5d9e4c5f075b55ba6fe1a08"],["/post/37318.html","4a351846f8c27e2785bb205064b93cd9"],["/post/37663.html","768df5d040da0df73c1cd10ae9dd442c"],["/post/38035.html","473f2b2d575b0b81c160bf4f397d3cbb"],["/post/38072.html","cf9624f84cdaa077127eab4293c9c484"],["/post/38145.html","eb221516500b82bb2fe23ad7f31e6df6"],["/post/39968.html","ecae6c1ebaff3992f142a7ff646d4daa"],["/post/3de4bc69.html","9363214932c455ac04f2ed4ea5cadc15"],["/post/40583.html","ba8849b5277b92918adf7932dc3632a2"],["/post/40997091.html","29b43b6dc706d6e03aca99de1e4699b7"],["/post/41129.html","ecdd32d6b6c25c1f707ad6aa84065f99"],["/post/41763.html","5896e5d37a36b694b5d6bf35832e5fc9"],["/post/41829.html","c137fab1ec82c902d9edc9bfec6f9ed2"],["/post/41840.html","d02460ea4c2954940fbcb9907ce42d99"],["/post/41e39f2b.html","7e5e5457da837efb6f7067380900324e"],["/post/43817.html","2b71e4aea5c128d051c330a687a6ae41"],["/post/43878.html","1f8e170de73a45ddf1b73f33b3b78ae3"],["/post/44250.html","8ac7bc882abce1b6ddf238d728853414"],["/post/44336.html","7a70fa3ab12ad5518711a482fa596be8"],["/post/44454.html","fc17c25d513c9a23a8cf94b5dae212da"],["/post/44487.html","dec323056dde55b197653715e491d819"],["/post/44914.html","32109892a49867cfac9f14b33dc9118a"],["/post/4551c130.html","a3b1649a66d0c27264939be1af1c30a1"],["/post/455a4c92.html","c953b8c6e6a569a14f515be57207dfec"],["/post/46390b34.html","06af4000ab40dd1bb68bf42d4ef59b63"],["/post/46466.html","ba4d965d6a539b212c1bc97deb0dc413"],["/post/46925.html","44d0a55bb7b0a8648de9889fac4e94ea"],["/post/47075.html","bb227a521cdab0bd504ca802f2c40726"],["/post/48220.html","70981413c9690883de268aa544198021"],["/post/4b1879e3.html","ef48ee09b3c9afa33dbb8e5bcf99b135"],["/post/4c720881.html","dcedbd456006c9d77fb75b0281b18ac9"],["/post/4f4fc0a1.html","08b4e39e27c6a18b04025c14a9862ef1"],["/post/50daec4.html","b36602c9535a5be3d870cb0096fcf033"],["/post/51491.html","50516dee44758bbc1750311255793a88"],["/post/51e63dcf.html","7edb027310e599b8057a6394ad438c78"],["/post/52078.html","334de3425d5dbb4274cf1043b5de512e"],["/post/53677394.html","07f43fa652e184f01e6cb6c59e652480"],["/post/54300.html","4d64da332754435a07cd246f850028c7"],["/post/54612.html","ab877bd52d67913ecaed976a669c27e7"],["/post/54613.html","d51cc5c2bdb372604100e08612956087"],["/post/54708.html","ad7429a932540275fceed1552256f370"],["/post/54778.html","42277f553cb3a5f6ffd7ce0e1365bdfa"],["/post/5490.html","36756d9020e3697b3e7503704f8dec5c"],["/post/55046.html","e824f90f4405ba49c57da6737660c6a6"],["/post/56929.html","67364e9c1eff8b867b3c4b5b3f65f3c4"],["/post/57339.html","e89359754d30c3b167896eb4ace57346"],["/post/57449.html","e32da06d4f588d7aa5a196ac519373e6"],["/post/57453.html","9fcc3a8bd3c74a10d74f58ae121338f1"],["/post/57671.html","eceecde341ded83208b5eba2726a4e74"],["/post/58313.html","77545c9353d2cc50fed3cedd89d9127b"],["/post/58481.html","bffa8c87b973319434d83d0c02b88348"],["/post/58986.html","c2f0761916b0749a4163317e1dc3749f"],["/post/59431.html","d61301f99f5e5d474d7bb9e40f6a5ffb"],["/post/5951da65.html","f27d0efcd25cf9923b14ee7431ad0271"],["/post/5be7e977.html","f7edf72f739199af6914608801999fed"],["/post/5f9e4eff.html","58f007fdee7858142ac46a5ee2ac4474"],["/post/604b49d0.html","19086da19515327c7e50c61b70ac4d29"],["/post/61312.html","26bfc462aaf61ff73b6d846425b167f6"],["/post/61738.html","94ec82b9e96bf9fb27b19192f6d10b3a"],["/post/61809.html","415c0e98fd31e51ef615e309b8036853"],["/post/61eaf19a.html","b7c83858b455b2a276ad6a9f8b8235ba"],["/post/63002.html","0fe937b2f7098b95adc11c788dbb6647"],["/post/63711.html","4774c472a496155c4ca00a229182bc3b"],["/post/6587.html","6bd07e028f376e5b385739a9d551a900"],["/post/6589.html","f0da26e893d80b4fde7c25335fb26a74"],["/post/67454659.html","7a1f451b331b66b67cea0f0759dafb59"],["/post/6880.html","e272d7f92b15c29bd33778db3d15ad22"],["/post/6ee50502.html","7b13e7b617a45fb0bf6897da0e9dfad3"],["/post/70263071.html","75c0c9e0706b23aee288b6ae2772238e"],["/post/70d4f4af.html","25e1fd2f99402332a954baab176adeb2"],["/post/71038564.html","ca55ccba04a868902c792fee07339de1"],["/post/7119.html","effb72aecc717188eb450b9a2b2dc80e"],["/post/74e7fdff.html","f44e033c959d1fb975571b723be1c91a"],["/post/7502.html","0bb902710cf3d0997be722827996867e"],["/post/75223936.html","be9a4936b8c93fd27b3f22b71e565b31"],["/post/7564.html","9b6a5cc2a209096bc589e78bdf2efaec"],["/post/766f9b60.html","16ceb3c785ed2f1cf6f102c6511fae8c"],["/post/769365ef.html","2fb8e8ae73353849bccf227508c066bf"],["/post/7ca31f7.html","c977a2edb17b0c85de52d1eec6975438"],["/post/7d1c86da.html","c7c237ec22ed999ec844a5103456e234"],["/post/7f3bcd7f.html","f894bc71acb83db87e97147bc53050e9"],["/post/8039.html","46a9b0bfd55b759665649dc529b02f2d"],["/post/8050.html","f7e11bad804620f88bf10c03257ece2a"],["/post/8072.html","341c9deb970cae9cadc2990ddbabe5ea"],["/post/8274.html","5d6a8f48f639cd4fbb10f2181230a339"],["/post/8372.html","3ad606968642f7292fc48695588b5c76"],["/post/8498.html","596a84b007f0b7bcac3ee8e677401692"],["/post/84ea90f7.html","9021b2935159ddf94842f5bd5f8b211e"],["/post/85b4e13b.html","fe6b5b01bfdbaee1e9bb7095c5c3f11c"],["/post/8e75958d.html","cf08b3676f35768e922df0739760062d"],["/post/912b2566.html","e53b17fe8d877cfb1d9e5f75c44263c8"],["/post/9187.html","b6de5896d9c8134d2c85c09d161f513b"],["/post/9197.html","23a3fb8c14f2eab8da5ae1506e1f1f3c"],["/post/94ceb2fd.html","71662607e9942978b566a6aa6e7c31a2"],["/post/95495db.html","b9e3f109b30d167dc8085cd77d65064b"],["/post/97246020.html","9e939b49e93d16a125d6ff0b2c05487c"],["/post/9954ba8e.html","898c759bb8da7190aa6a4e8e753e9bc8"],["/post/9d855db5.html","0ef9802996817312cfa8dbb2d479c8c4"],["/post/a3a786d6.html","3a0dc8efecb7a81317fd138ca2335c21"],["/post/a444b428.html","0a77cfc36fe4734b7efe758903191522"],["/post/a50b8908.html","34c14a58866545ab8e4d33c4bb40fe8e"],["/post/aa1eade8.html","5f6006186882830e613cfd2e9f36be43"],["/post/ade8c6d6.html","2ec43213a60f8b8b1c1ca8ae680c4c3a"],["/post/ae8362df.html","912d1c47864961cc12e2c1bd1853dd3a"],["/post/af3eed3c.html","30227cf52b1f1e07d6a83c408a31837b"],["/post/b4c1d206.html","c8b872890d0d4bd4a81468ea707bb34d"],["/post/b75632a1.html","8f26225281c128100657407778a9abfd"],["/post/bb25e9a9.html","f72681fcab299f1c2e51e2179aea7d64"],["/post/bcc68732.html","90cd48dc63486fd6e1ef1c57865bb562"],["/post/bcf345af.html","8d69306725c0d04afa247b318614c64d"],["/post/bd608ff7.html","4c617f0a4c08b48e0f4e59251bce32b8"],["/post/c82a1c99.html","1545dc8383eb54256a882007082af307"],["/post/d213fc7f.html","cbf5b705b25dbe341042e50642a396e6"],["/post/d431fab4.html","a5d519947caab5f3c027ac9c8f4d4480"],["/post/d5381517.html","129a3b1cce1e13e813cbd19d3696cade"],["/post/d94f88de.html","09c2b49134aa3be2bf1a6f03bf8c9135"],["/post/e058ffd8.html","6109667db59aa61f7ac626e65d5d5011"],["/post/e0f8cb74.html","92fe3d31e8a0c3821ccd0778d6d8bae3"],["/post/eefe591f.html","1b0f168a1b11f33a63b1481f73a84520"],["/post/ef296a07.html","770f8aca31ec060840ebb33b1fe81a79"],["/post/ef3a3fcc.html","a85a54e69585ac0c021fc4661374a39d"],["/post/f201f9fd.html","89c26efa00cc92bd32d2f250b1c2084a"],["/post/f79e4123.html","0f08a9f2173441dd9b490909805099e2"],["/post/f8648a1d.html","38f792297cf76ccab469e4834051a4f7"],["/post/f89cb603.html","05233e024bdaa673951c8b616cd9a283"],["/post/fa288682.html","ed8821fe4dbca22a03a4cc84eaf8a043"],["/post/fb98053e.html","04b1ee4579e633f7c9303ef10ebdfcd8"],["/sw-register.js","12704ca01bdae608d8b1eb8d31c22839"],["/tags/AT-T/index.html","d96fcbc9421c1b44d82e6a446cd55dc1"],["/tags/index.html","388fd2a3c9f49ba7cb2325136740eb23"],["/tags/动态规划/index.html","9de918659096e91de145e71c32608cca"],["/tags/字符串/index.html","b2790529190bad14ea3fdc8971fbcc9b"],["/tags/字符常量/index.html","f5d12a03a8b0fb41bd0bd122d23121d7"],["/tags/快排/index.html","4e69af2535c10478f62b754b9db25e7d"],["/tags/排序/index.html","cbbdfe4d8d6d0080e76766a45e46ab31"]];
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
