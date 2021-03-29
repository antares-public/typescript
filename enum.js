var Memdership;
(function (Memdership) {
    Memdership[Memdership["Simple"] = 0] = "Simple";
    Memdership[Memdership["Standart"] = 1] = "Standart";
    Memdership[Memdership["Premium"] = 2] = "Premium";
})(Memdership || (Memdership = {}));
var membership = Memdership.Standart;
var membershipReverse = Memdership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.VK;
console.log(social);
