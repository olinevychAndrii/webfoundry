'use strict';

angular.module('profileApp')
.constant('baseUrl','localhost:3000')
        .service('indexService', ['$http', 'baseUrl', function($http, baseUrl) {
    
            /*this.getPersons = function(){
             return $http.get(baseUrl); 
            }; */
            var getPersons = 
                {"results":[{"gender":"male","name":{"title":"mr","first":"محمدپارسا","last":"كامياران"},"location":{"street":"2537 میدان قیام","city":"سبزوار","state":"هرمزگان","postcode":82424},"email":"محمدپارسا.كامياران@example.com","login":{"username":"yellowfrog224","password":"cumslut","salt":"pSEEwK3x","md5":"1e60f6d6c42194d44ec7a5848e560f8a","sha1":"4a96558bc2732bf5df2cd0ee934fc142d6342ec0","sha256":"6fcf85658c968ab021d5c1e8f03b60c5db94400fa0a804056970e469b5c3aac9"},"registered":966407315,"dob":892770597,"phone":"074-91266461","cell":"0967-312-6424","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/39.jpg","medium":"https://randomuser.me/api/portraits/med/men/39.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/39.jpg"},"nat":"IR"},{"gender":"male","name":{"title":"mr","first":"adílio","last":"santos"},"location":{"street":"2672 rua onze ","city":"francisco morato","state":"sergipe","postcode":88504},"email":"adílio.santos@example.com","login":{"username":"tinybutterfly475","password":"bridge","salt":"8BR0YnM1","md5":"dc0d945347e6a2a1ca5913c969cefcaa","sha1":"07c84174c9057fc1ad51f8464eef1ab486a89078","sha256":"429b9892483e2d3664a3b2088575c98aea0af36cbd189df01d4ed8caf617afa9"},"registered":1180657083,"dob":1306250081,"phone":"(80) 3013-5260","cell":"(14) 5615-3853","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/65.jpg","medium":"https://randomuser.me/api/portraits/med/men/65.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/65.jpg"},"nat":"BR"},{"gender":"female","name":{"title":"ms","first":"danielle","last":"foster"},"location":{"street":"1665 windsor road","city":"norwich","state":"clwyd","postcode":"F8 6AN"},"email":"danielle.foster@example.com","login":{"username":"tinyfish999","password":"erotic","salt":"JXBsFA9i","md5":"1671c40878e71c08aa54a34c2980446d","sha1":"871f859e8400efa878852a2cf92be18fc413fac0","sha256":"d21f9dfc4530ec2970274113ff99b1ea287e1fe4d36e10b3787436b6f2691a1b"},"registered":1422109081,"dob":602845745,"phone":"01094 64260","cell":"0773-809-934","id":{"name":"NINO","value":"SN 02 40 01 M"},"picture":{"large":"https://randomuser.me/api/portraits/women/43.jpg","medium":"https://randomuser.me/api/portraits/med/women/43.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/43.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"mr","first":"dominic","last":"ennis"},"location":{"street":"1534 queen st","city":"deer lake","state":"northwest territories","postcode":66361},"email":"dominic.ennis@example.com","login":{"username":"purpletiger465","password":"michigan","salt":"FSVvppvQ","md5":"f4fb88e81a7617da9bd77b8bc879234d","sha1":"c72a9ac140bd7a66c5f6dd5f393a95ed0a094d1c","sha256":"0b13a1e1d88b56c364b10767b1a474f1bcbec851a15cfe3c867e570d4ab1764f"},"registered":989689139,"dob":587001118,"phone":"653-713-0130","cell":"421-171-3497","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/69.jpg","medium":"https://randomuser.me/api/portraits/med/men/69.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/69.jpg"},"nat":"CA"},{"gender":"male","name":{"title":"mr","first":"arne","last":"keller"},"location":{"street":"4256 dorfstraße","city":"weißenburg-gunzenhausen","state":"sachsen","postcode":40484},"email":"arne.keller@example.com","login":{"username":"smallpanda513","password":"newbie","salt":"UNYa0sW7","md5":"9c0be3271461418d3e4f0b758bc97680","sha1":"059664f415b81249407f87700825b72074f2055a","sha256":"89db28867b14101a6948e44133f2d3da998816693f8da89c0438442aee7303b3"},"registered":1032693906,"dob":792312262,"phone":"0696-3567840","cell":"0170-2009339","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/49.jpg","medium":"https://randomuser.me/api/portraits/med/men/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/49.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"mr","first":"konrad","last":"kuhn"},"location":{"street":"1724 kastanienweg","city":"dresden","state":"berlin","postcode":13840},"email":"konrad.kuhn@example.com","login":{"username":"greendog680","password":"maxxxx","salt":"vWUxjZNX","md5":"4d667c5251f69d291cf08e8168e31291","sha1":"b2312552ee7067c88f6eabe1b415a7b8d24f6c8f","sha256":"bd1e5a48976928600116f5ce82b9ffc7bebcc65281ca4f9d09560e45ad01f1b0"},"registered":947908998,"dob":62329631,"phone":"0869-7653652","cell":"0170-5437374","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/72.jpg","medium":"https://randomuser.me/api/portraits/med/men/72.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/72.jpg"},"nat":"DE"},{"gender":"female","name":{"title":"ms","first":"viktoria","last":"wagner"},"location":{"street":"9370 erlenweg","city":"pirmasens","state":"berlin","postcode":55184},"email":"viktoria.wagner@example.com","login":{"username":"blackfrog172","password":"prissy","salt":"hLHkruWo","md5":"bc0554f2696f9d17f0dcddafe9005547","sha1":"7e52a1befd48baf52a92b733f095d25d37b6449c","sha256":"864aa498779f621d21e4cdcbae630dba80dfc5edc0ad931bf5caf4005cb24081"},"registered":1230362431,"dob":756306343,"phone":"0455-1237404","cell":"0179-2212987","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/81.jpg","medium":"https://randomuser.me/api/portraits/med/women/81.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/81.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"mr","first":"alfredo","last":"medina"},"location":{"street":"7801 oak ridge ln","city":"darwin","state":"tasmania","postcode":6544},"email":"alfredo.medina@example.com","login":{"username":"heavydog856","password":"stefan","salt":"VztaXLjQ","md5":"6ffb0b09d97772fdb13684a948ea770b","sha1":"88a28562a5482796038f1b337b9cf197f0422799","sha256":"abc05abf57c1c3bff2a2da76d16898a2c2683e744c17de640d9fc168bd8d5a21"},"registered":1359751790,"dob":1193357633,"phone":"00-4434-6038","cell":"0482-043-213","id":{"name":"TFN","value":"514026538"},"picture":{"large":"https://randomuser.me/api/portraits/men/63.jpg","medium":"https://randomuser.me/api/portraits/med/men/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"},"nat":"AU"},{"gender":"female","name":{"title":"madame","first":"zoé","last":"leroux"},"location":{"street":"7537 rue du stade","city":"ropraz","state":"appenzell ausserrhoden","postcode":5471},"email":"zoé.leroux@example.com","login":{"username":"bigmouse801","password":"cyrano","salt":"9KN89ytK","md5":"4e07db466e225b6fd366abd421dc6cbc","sha1":"edbf4454ca783b690a6ad38d1b31d0c3fc024216","sha256":"8084bfa965fda169f4285ab54bf6c32e1aca40376bf4c0b87dbf3820de2747d6"},"registered":1039688455,"dob":429329503,"phone":"(136)-862-8927","cell":"(660)-089-1748","id":{"name":"AVS","value":"756.HBVZ.JTCO.59"},"picture":{"large":"https://randomuser.me/api/portraits/women/22.jpg","medium":"https://randomuser.me/api/portraits/med/women/22.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/22.jpg"},"nat":"CH"},{"gender":"male","name":{"title":"mr","first":"javier","last":"gutierrez"},"location":{"street":"7561 w belt line rd","city":"wollongong","state":"victoria","postcode":7627},"email":"javier.gutierrez@example.com","login":{"username":"greengorilla799","password":"fields","salt":"w3swYvqA","md5":"daff9c239284c270f73db1c2f1255550","sha1":"59eaa39562275e65d80252e31903ce47af967b68","sha256":"ce0429d0c543739dfecffeca4f93b271d51c64d584994e26b9a7e7745f410133"},"registered":1182424328,"dob":949451511,"phone":"02-8257-6370","cell":"0432-165-005","id":{"name":"TFN","value":"180705598"},"picture":{"large":"https://randomuser.me/api/portraits/men/94.jpg","medium":"https://randomuser.me/api/portraits/med/men/94.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/94.jpg"},"nat":"AU"}],"info":{"seed":"cf2a3aa15548cb2d","results":10,"page":1,"version":"1.0"}};
            
            this.getPersons = getPersons; 
           
            this.pers = getPersons;  
                                       
        }]);