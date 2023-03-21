import img1 from "../assets/images/monkey.jpg";

type Users = {
   id: number,
   name: string,
   accountType: string,
   thumbnail: string
}

export const users:Users [] = [
   {
      id:1,
      name: 'Mokodepavo',
      accountType: 'Premium',
      thumbnail:img1
   }
]