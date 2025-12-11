
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'


 const Sect = {
   1:{
  date: "OCT 31, 2025",
  tag: "Step into the spookiest celebration of the year",
  tag_line: "where pumpkins glow and enchantment never sleeps",
  title: "Halloween at Disneyland 2025",
  tit_desc: "When spooks took over the park, Disneyland didn’t hide from the fright, every corner of the kingdom came alive with playful ghosts, dazzling lights, and laughter that echoed through the night.",
  heading: "When Spooks Took Over the Park",
  img_1: "https://i.pinimg.com/736x/15/54/01/1554014147d29090cb5e4c67e2925c9a.jpg",
  img_2: "https://i.pinimg.com/1200x/f1/5c/c9/f15cc99b92f1c33141bc573571e3d93b.jpg",
  img_3: "https://i.pinimg.com/736x/ad/ef/55/adef55bdb0ea0db7dda9eebae970b1dc.jpg",
  img_4: "https://i.pinimg.com/1200x/1c/4f/ae/1c4faeb19bf2e14d940d721e1d4454ca.jpg",
  titl_1: "A Park Transformed",
  desc_1: "As dusk fell, Main Street shimmered in orange and violet hues. Giant pumpkins smiled under twinkling lights, and every corner of Disneyland became a scene from a beautifully eerie dream.",
  titl_2: "The Arrival of the Ghosts",
  desc_2: "Classic Disney characters donned their Halloween best — from Mickey’s witchy grin to Goofy’s ghostly giggles. Guests were greeted by cheerful spirits who turned every step into a spooktacular surprise.",
  titl_3: "The Parade of Shadows and Smiles",
  desc_3: "The Halloween parade marched in with glowing floats, fog-filled streets, and the sound of hauntingly cheerful music. From Jack Skellington’s mischief to the twirl of dancing villains, it was a celebration of playful fright and timeless joy.",
  titl_4: "The Night That Glowed Forever",
  desc_4: "As fireworks painted the sky, Disneyland’s Halloween night ended not in silence but in wonder. Families laughed, children waved their glow wands, and even the ghosts seemed to smile — because at Disneyland, even the spooks know how to celebrate.",
},
   2:{
  date: "OCT 31, 2025",
  tag: "Taste the treats that make Halloween unforgettable",
  tag_line: "from ghostly goodies to pumpkin delights across the park",
  title: "Spooky Snacks and Sweet Surprises",
  tit_desc: "The park transforms into a culinary wonderland filled with pumpkin-infused delights, eerie desserts, and ghoulishly creative snacks that make every bite a celebration.",
  heading: "Spooky Snacks and Sweet Surprises",
  img_1: "https://i.pinimg.com/736x/ad/f2/5e/adf25e04d6fb48970e0dfed027b5508f.jpg",
  img_2: "https://i.pinimg.com/736x/54/c8/cf/54c8cf5c1906093759687206a1f56d56.jpg",
  img_3: "https://i.pinimg.com/736x/45/b4/26/45b426e89cb060cb8b7a439b9ebeed45.jpg",
  img_4: "https://i.pinimg.com/736x/97/a3/6e/97a36e06177ed29b62343a48426a14a8.jpg",
  titl_1: "A Feast for the Fearless",
  desc_1: "Every Halloween, Disneyland chefs craft an exclusive menu of spooky delights. From bat-shaped brownies to ghostly cupcakes, the park becomes a candy-colored dream where every treat tells a story.",
  titl_2: "Pumpkin Spice and Everything Nice",
  desc_2: "The scent of cinnamon and pumpkin fills the air. Seasonal favorites like pumpkin churros, haunted hot chocolate, and caramel apple sundaes turn ordinary snacks into autumn legends.",
  titl_3: "Wickedly Delicious Creations",
  desc_3: "At every corner, themed desserts steal the spotlight. Guests can bite into Ursula-inspired cupcakes, Maleficent macarons, and Jack Skellington cookies that taste as good as they look.",
  titl_4: "Sweet Memories to Take Home",
  desc_4: "No trip is complete without a souvenir snack. From candy-coated apples to limited-edition popcorn buckets, Disneyland’s Halloween treats make the perfect memento — proof that the spookiest season can also be the sweetest.",
},
3:{
  date: "OCT 31, 2025",
  tag: "Step into the eerie elegance of Disneyland after dark",
  tag_line: "where every hallway whispers a haunting tale",
  title: "Inside the Ghosthouse",
  tit_desc: "Step inside the Ghosthouse, where flickering candles, spectral hosts, and eerie melodies welcome you to an unforgettable after-dark adventure.",
  heading: "Inside the Ghosthouse",
  img_1: "https://images.unsplash.com/photo-1542424308-62e11789ec77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  img_2: "https://i.pinimg.com/736x/b4/63/36/b46336fb7659572dc2f2e795ff1b9f3c.jpg",
  img_3: "https://cdn-imgix.headout.com/media/images/ef506cbe-72d2-46a9-9e9e-cdb151cfcdbd-1755577449671-303551.jpg?auto=format&w=828&h=619.1999999999999&q=90&ar=3%3A4&crop=faces%2Ccenter&fit=crop",
  img_4: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/832/468/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/events/halloween/merch-collections/RH2_9918_1-16x9.jpg?2025-07-28T16:39:14+00:00",
  titl_1: "A Mansion Full of Mystery",
  desc_1: "The Ghosthouse — better known as the Haunted Mansion — stands draped in fog, its doors creaking open to reveal a world between the living and the lost. Inside, portraits watch, chandeliers sway, and time feels frozen in a whisper of the past.",
  titl_2: "Spirits That Tell Stories",
  desc_2: "Each room unfolds a new tale. The ballroom dances eternally, ghostly carriages drift by, and the bride in the attic gazes forever into the unknown. The storytelling is not just visual — it’s emotional, pulling guests into the lore of Disneyland’s most beloved haunt.",
  titl_3: "Nighttime Illusions and Living Shadows",
  desc_3: "At night, the mansion’s magic deepens. Special effects amplify the phantoms’ glow, secret projections awaken hidden corners, and soft organ music fills the halls — blurring the line between fantasy and fear.",
  titl_4: "A Haunting That Lives Forever",
  desc_4: "Long after guests leave, the spirit of the Ghosthouse lingers. It’s not about scares — it’s about stories that stay with you. Every visit feels like greeting old friends, proving that in Disneyland, even the haunted hearts beat with wonder.",
},
4:{
  date: "OCT 31, 2025",
  tag: "Step into a dream where animation meets reality",
  tag_line: "a dazzling parade that brings childhood favorites to life",
  title: "When the Cartoons Came to Life",
  tit_desc: "Beloved characters march beneath a canopy of lights, music fills the air, and fans of every age gather to watch their childhood dreams parade by — in color, in motion, and in pure joy.",
  heading: "When the Cartoons Came to Life",
  img_1: "https://i.pinimg.com/736x/94/a0/36/94a0366a1ba60cdb518c86e9a2575f90.jpg",
  img_2: "https://i.pinimg.com/736x/ca/8f/f9/ca8ff9659af1476a57b4bb977e77a1ec.jpg",
  img_3: "https://i.pinimg.com/1200x/b4/47/16/b447161cb5e0700b2a7e4d7ab5ee28a7.jpg",
  img_4: "https://i.pinimg.com/736x/82/45/62/824562d7c44edc911a8273db056ab1ae.jpg",
  titl_1: "A Night of Living Animation",
  desc_1: "As the music swells and the first float glows into view, Disneyland’s iconic characters spring to life. Mickey, Minnie, Goofy, and dozens more glide through the streets, surrounded by dancers and shimmering lights that seem pulled straight from a dream.",
  titl_2: "A Symphony of Lights and Color",
  desc_2: "The parade is a moving masterpiece — illuminated costumes, synchronized choreography, and floats themed around Disney’s timeless stories. From Frozen’s icy glow to the rich gold of The Lion King, every moment paints a new chapter of magic.",
  titl_3: "Stories in Motion",
  desc_3: "Each float tells its own tale. Aladdin soars above the crowd, Moana sails through the mist, and Toy Story’s crew brings laughter with every turn. It’s not just a parade — it’s storytelling brought to life, with every character shining in their element.",
  titl_4: "Where Dreams March On",
  desc_4: "As fireworks burst above the castle, the parade concludes with a finale that reminds everyone why Disneyland is called ‘The Happiest Place on Earth.’ It’s a place where imagination takes form, nostalgia meets new wonder, and the magic never truly ends.",
},
}

const NewBlog = () => {
const navigate = useNavigate()
const {id} = useParams()
const post = Sect[id]
  return (
    <section>
      <div className='md:w-full md:h-[90vh] h-auto bg-cover bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url(https://wallpapers.com/images/hd/purple-gradient-background-6000-x-4000-9710xoirfab2lbeb.jpg)`}}>
        <div className='text-center md:w-[50%] w-[85%] md:m-5 mt-15'>
            <span className='text-[14px] text-gray-500 border-[1px] p-2 rounded-full'><i class="ri-bard-fill"></i> {post.date}</span>
            <div className='mt-3 md:text-5xl text-3xl md:leading-16 leading-9'>{post.tag}</div>
            <p className='mt-2 md:text-[16px] text-[14px] text-gray-500'>{post.tag_line}</p>
            <h1 className='md:text-3xl text-2xl text-purple-800 mt-3'><i class="ri-shapes-line"></i> {post.title}</h1>
            <p className='mt-2 md:text-[16px] text-[14px] text-gray-500 mb-3'>{post.tit_desc}</p>
<div className='md:mb-0 mb-15'><i className="ri-home-4-fill cursor-pointer text-2xl text-purple-400 bg-black p-2 rounded-full shadow-xl/30 inset-shadow-sm" onClick={()=>{navigate ('/Home#one')}}></i></div>
        </div>
      </div>
      <div className='w-full md:h-[200vh] h-auto text-center md:m-0'>
        <div className='md:w-full w-[100%] md:h-[15%] flex justify-center items-center'>
          <p className='md:text-5xl text-3xl bg-gradient-to-br from-blue-500 to-pink-300 bg-clip-text text-transparent transition-all duration-500 md:mb-0 m-7'>{post.heading}</p>
        </div>
        <div className='w-[1px] h-[165%] bg-gradient-to-b from-purple-200 via-blue-200 to-pink-400 absolute left-1/2 transform md:-translate-x-1/2 hidden md:block'></div>
        <div className='absolute left-1/2 transform md:-translate-x-[50%] md:flex flex-col justify-between h-[140%] py-13 hidden'>
        <div className='w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-300 rounded-full border-4 border-purple-300 shadow-md'></div>
        <div className='w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-300 rounded-full border-4 border-purple-300 shadow-md'></div>
        <div className='w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-300 rounded-full border-4 border-purple-300 shadow-md'></div>
        <div className='w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-300 rounded-full border-4 border-purple-300 shadow-md'></div>
        </div>
        <div className='w-full md:h-[85%] flex justify-center items-center flex-col md:flex-row'>
          <div className='md:w-[50%] w-[90%] h-[90%] flex flex-col items-center'>
          <div className='md:w-[49%] h-[100%] flex flex-col items-center justify-around md:gap-0 gap-10'>
            <div className='w-[95%] h-[21%] bg-white shadow-xl/30 rounded-2xl'>
            <img src={post.img_1} alt="" className='object-cover rounded-2xl w-[100%] md:h-[100%] h-[300px]'/>
            </div>
            <div className='w-[95%] h-[21%] flex justify-center items-center bg-white rounded-2xl'>
              <div className='w-[95%] h-[95%] text-left flex justify-center items-center p-3 rounded-2xl hover:shadow-lg/50 hover:scale-102'>
                <div className='flex flex-col justify-around'>
                  <h1 className='text-[16px] font-bold'>{post.titl_1}</h1>
                  <p className='text-[13px] font-sans'>{post.desc_1}</p>
                </div>
              </div>
            </div>
            <div className='w-[95%] h-[21%] bg-white shadow-xl/30 rounded-2xl'>
            <img src={post.img_2} alt="" className='object-cover rounded-2xl w-[100%] md:h-[100%] h-[300px]'/>
            </div>
            <div className='w-[95%] h-[21%] flex justify-center items-center bg-white rounded-2xl'>
              <div className='w-[95%] h-[95%] text-left flex justify-center items-center p-3 rounded-2xl hover:shadow-lg/50 hover:scale-102'>
                <div className='flex flex-col justify-around'>
                  <h1 className='text-[16px] font-bold'>{post.titl_3}</h1>
                  <p className='text-[13px] font-sans'>{post.desc_3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[50%] w-[90%] h-[85%] flex md:flex-col items-center md:mt-0 mt-5'>
          <div className='md:w-[49%] h-[100%] flex md:flex-col flex-col-reverse items-center justify-around md:gap-0 gap-10'>
            <div className='w-[95%] h-[21%] flex justify-center items-center bg-white rounded-2xl hover:shadow-lg/50 hover:scale-102'>
              <div className='w-[95%] h-[95%] text-left flex justify-center items-center p-3 rounded-2xl'>
                <div className='flex flex-col justify-around'>
                  <h1 className='text-[16px] font-bold font-sans'>{post.titl_2}</h1>
                  <p className='text-[13px] font-sans'>{post.desc_2}</p>
                </div>
              </div>
            </div>
            <div className='w-[95%] h-[21%] bg-white shadow-xl/30 rounded-2xl'>
            <img src={post.img_3} alt="" className='object-cover rounded-2xl w-[100%] md:h-[100%] h-[300px]'/>
            </div>
            <div className='w-[95%] h-[21%] flex justify-center items-center bg-white rounded-2xl'>
              <div className='w-[95%] h-[95%] text-left flex justify-center items-center p-3 rounded-2xl hover:shadow-lg/50 hover:scale-102'>
                <div className='flex flex-col justify-around'>
                  <h1 className='text-[16px] font-bold'>{post.titl_4}</h1>
                  <p className='text-[13px] font-sans'>{post.desc_4}</p>
                </div>
              </div>
            </div>
            <div className='w-[95%] h-[21%] bg-white shadow-xl/30 rounded-2xl'>
            <img src={post.img_4} alt="" className='object-cover rounded-2xl w-[100%] md:h-[100%] h-[300px]'/>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default NewBlog
