enum Memdership {
  Simple,
  Standart,
  Premium,
}

const membership = Memdership.Standart;
const membershipReverse = Memdership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
}

const social = SocialMedia.VK;
console.log(social);
