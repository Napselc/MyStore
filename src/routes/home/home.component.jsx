import { Outlet } from "react-router-dom"
import Directory from "../../components/directory/directory.component"
const Home = () =>  {

const shoe_categories = [
  {
    "id": 1,
    "title": "Formals",
    "imageUrl": "https://www.jiomart.com/images/product/330x410/rvpwyvaxs1/dls-synthetic-leather-party-wear-dress-formal-shoes-for-men-and-boys-brown-product-images-rvpwyvaxs1-0-202210041053.jpg"
  },
  {
    "id": 2,
    "title": "Flip flops",
    "imageUrl": "https://cdn.mos.cms.futurecdn.net/FsqkxDjubX4vpdQQ8ca3sZ.jpg"
  },
  {
    "id": 3,
    "title": "Sports Shoes",
    "imageUrl": "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enDE/Images/CAM_Onsite_RunningIWP_FW22_Desktop_400x248_836213_tcm346-915629.jpg"
  },
  {
    "id": 4,
    "title": "Winter Boots",
    "imageUrl": "https://cdn.thewirecutter.com/wp-content/uploads/2020/03/winter-boots-lowres-9388.jpg"
  },
  {
    "id": 5,
    "title": "Sneakers",
    "imageUrl": "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg"
  }
]

const jacket_categories = [
  {
    "id": 1,
    "title": "Mantel",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJ0zZhkj5XlKHEYNunEn59p5yWBLp0mgwu0Rv5k9-hvekCtZjy9kYox19zCXbKrixuc4&usqp=CAU"
  },
  {
    "id": 2,
    "title": "Hoodies",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hoodie-szmurlo.jpg/800px-Hoodie-szmurlo.jpg"
  },
  {
    "id": 3,
    "title": "Leather",
    "imageUrl": "https://www.mrporter.com/cms/ycm/resource/blob/1481748/1c5ad6b89f301edff400d6ba3c9030cb/mob-data.jpg"
  },
  {
    "id": 4,
    "title": "Denim",
    "imageUrl": "https://assets.vogue.com/photos/618ee1d1253542940f864285/4:3/w_1199,h_899,c_limit/1016-VO-FASH02-01.jpg"
  }
  
]

const shirt_categories = [
  {
    "id": 1,
    "title": "Polo",
    "imageUrl": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f5a0582668a42b58e0fabc1004d0474_9366/Training_Essentials_Polo_Shirt_Blau_FU3095_01_standard.jpg"
  },
  {
    "id": 2,
    "title": "Turtle Neck",
    "imageUrl": "https://images.squarespace-cdn.com/content/v1/5ba413b6b2cf794431a784ce/1572033125734-JGCXVHVVENMSA2406X05/turtleneck-cover.JPG?format=750w"
  },
  {
    "id": 3,
    "title": "T shirts",
    "imageUrl": "https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjEwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/catalog/tailor-store-t-shirt-4.jpg"
  },
  {
    "id": 4,
    "title": "Tank tops",
    "imageUrl": "https://www.stedman.eu/out/pictures-2023/zoom/ST2810_model.jpg"
  },
  {
    "id": 5,
    "title": "Formals",
    "imageUrl": "https://ae01.alicdn.com/kf/H71269cd0495945f7ba949b4ebcf6913bt/British-Style-Summer-Solid-Shirt-Collections-Men-Clothing-2022-All-Match-Slim-Fit-Business-Formal-Wear.jpg_Q90.jpg_.webp"
  }
]


  return (

    <div>
    <Outlet />
    <Directory categories = {shoe_categories}></Directory>
    <Directory categories = {jacket_categories}></Directory>
    <Directory categories = {shirt_categories}></Directory>
    </div>
  );
}

export default Home;
