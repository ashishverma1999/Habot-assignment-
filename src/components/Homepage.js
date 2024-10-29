import logo from "./assets/habot-logo.png";
import Bgimg from "./assets/Bgimg.png";
import suit from "./assets/suitcase.png";
import map from "./assets/location.png";
import userPlus from "./assets/signup.png";
import docCheck from "./assets/document icon.png";
import docSearch from "./assets/document search.png";
import docPen from "./assets/document pen.png";
import docedit from "./assets/document edit.png";
import handshk from "./assets/handshake.png";
import flogo from "./assets/footer logo.png";
import linked from "./assets/LinkedIn.png";
import fb from "./assets/Facebook.png";
import tweet from "./assets/Twitter.png";
import ig from "./assets/Instagram.png";

function homepage() {
  return (
    <>
      <nav class="size-full bg-white flex justify-between ">
        <img src={logo} class="ml-14"></img>
        <div class="flex gap-10 mr-10">
          <p class="text-slate-600 py-2">Find Suppliers</p>
          <p class="text-slate-600 py-2">Find Service Tags</p>
          <button class="bg-transparent hover text-green-700 font-semibold py-0.5 px-6 border border-green-700 hover:border-transparent rounded">
            Login/Sign Up
          </button>
        </div>
      </nav>
      <div
        style={{ backgroundImage: `url(${Bgimg})` }}
        class=" place-items-center bg-cover bg-center h-[75vh]"
      >
        <p class="text-white text-4xl pt-32 font-extrabold">
          &emsp; Are You a Supplier?
          <br />
          Explore Matching Opportunities.
        </p>
        <div class="flex">
          <label class="relative block py-6">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <img class="w-4" src={suit}></img>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[20vw]"
              placeholder="Search your desired location here"
              type="text"
              name="search"
            />
          </label>

          <label class="relative block py-6">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <img class="w-4" src={map}></img>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[20vw]"
              placeholder="Search your desired location here"
              type="text"
              name="search"
            />
          </label>

          <button class="ml-1 bg-green-700 hover:bg-green-700 h-9 mt-6 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
            Search
          </button>
        </div>

        <p class="text-white bg-blue-900 px-1 rounded font-semibold">
          Are you a buyer?
          <span class="underline">
            Click here if you are looking to post a requirements
          </span>
        </p>
      </div>

      <div class="grid grid-cols-2 grid-flow-row gap-1 mt-10">
        <div class="bg-white ml-10">
          <span class="text-3xl font-bold from-neutral-950">
            Ready to dive into HABOT?
          </span>
          <p class="font-sans py-6">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button class="ml-1 bg-green-700 hover:bg-green-700 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-700">
            Sign up today!{" "}
            <svg
              class="inline-block h-8 px-4"
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2  gap-4 bg-white m-5 ml-14">
          <button class="bg-transparent border border-orange-700 text-gray-700 hover font-semibold py-2 rounded focus:outline-none w-[17vw]">
            Abu Dhabi
          </button>
          <button class="bg-transparent border border-orange-700 text-gray-700 hover font-semibold py-2  rounded focus:outline-none w-[17vw]">
            Dubai
          </button>
          <button class="bg-transparent border border-orange-700 text-gray-700 hover font-semibold py-2 rounded focus:outline-none w-[17vw]">
            Sharjah & Ajman
          </button>
          <button class="bg-transparent border border-orange-700 text-gray-700 hover font-semibold py-2  rounded focus:outline-none w-[17vw]">
            Fujairah
          </button>
          <button class="bg-transparent border border-orange-700 text-gray-700 hover font-semibold py-2  rounded focus:outline-none w-[17vw]">
            Ras Al Khaimah
          </button>
          <button class="bg-transparent border border-orange-700 text-gray-700 hover font-semibold py-2  rounded focus:outline-none w-[17vw]">
            Umm Al Quwain
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-24  gap-4 w-[90vw] place-self-center bg-blue-950">
        <div class="relative overflow-hidden w-full pb-[56.25%] m-14 mt-24">
          <iframe
            class="absolute top-0 left-0 w-[40vw] h-[50vh] "
            src="https://www.youtube.com/embed/IZLp-TZyDkQ
"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div class="mt-20 ml-20">
            {" "}
            <span>
              <button class="bg-transparent font-sans text-2xl text-white font-bold hover:text-orange-700 border ml-14 hover:underline border-none hover:border-transparent rounded">
                Buyer
              </button>
              <button class="bg-transparent font-sans text-2xl text-white font-bold hover:text-orange-700 ml-20 border border-none hover:border-transparent rounded">
                Supplier
              </button>
            </span>{" "}
          </div>
          <li class="text-white mt-10 ml-20 py-1 text-lg">
            Post your requirements.
          </li>
          <li class="text-white ml-20 py-1 text-lg">
            Sit back for multiple suppliers to contact you.
          </li>
          <li class="text-white ml-20 py-1 text-lg">
            Choose among the suppliers based on the ratings <br /> and reviews.
          </li>
        </div>
      </div>
      <div class="bg-sky-200 mt-24 h-36 flex">
        <p class="text-2xl font-semibold mt-16 ml-24 px-32">
          Let Suppliers Find You{" "}
        </p>
        <p class="px-36 mt-16">
          <button class="bg-orange-600 border border-orange-700 text-white hover font-semibold py-2  rounded focus:outline-none w-[17vw]">
            Get Verified
          </button>
        </p>
      </div>
      <div class="bg-white h-36 text-center">
        <h3 class="text-2xl font-bold py-2 mt-12">How it works?</h3>
        <p class="py-2">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with
          <br />
          potential buyers, and build successful business relationships, sharing
          valuable feedback
        </p>
      </div>
      <div class="grid bg-slate-300 grid-cols-3 w-[60vw] place-self-center">
        <div class="bg-sky-200 h-48 w-64 text-center">
          <img src={userPlus} class="ml-24 py-4 mt-5 h-20"></img>
          <p>
            Select Your Role and
            <br />
            Sign Up
          </p>
        </div>
        <div class="bg-white h-48 w-64 text-center">
          <img src={docCheck} class="ml-24 py-4 mt-5 h-20"></img>
          <p>
            Buyers Post Your
            <br />
            Requirements
          </p>
        </div>
        <div class="bg-sky-200 h-48 w-64 text-center">
          <img src={docSearch} class="ml-24 py-4 mt-5 h-20"></img>
          <p>
            Review, Select, and
            <br />
            Contact the Best Suppliers
          </p>
        </div>
        <div class="bg-white h-48 w-64 text-center">
          <img src={docedit} class="ml-24 py-4 mt-5 h-20"></img>
          <p>
            {" "}
            Suppliers Complete your
            <br />
            profile and get notified for
            <br />
            opportunities
          </p>
        </div>
        <div class="bg-sky-200 h-48 w-64 text-center">
          <img src={docPen} class="ml-24 py-4 mt-5 h-20"></img>
          <p>
            Contact to Buyers and Share
            <br />
            your Quote for the service
          </p>
        </div>
        <div class="bg-white h-48 w-64 text-center">
          <img src={handshk} class="ml-24 py-4 mt-5 h-20"></img>
          <p>
            Both the Parties can Connect
            <br />
            and Make Business Leave a<br />
            Feedback
          </p>
        </div>
      </div>
      <div class="bg-white h-44"></div>
      <footer class="bg-blue-950 w-[100vw] mt- h-44 place-items-center">
        <div class="grid grid-cols-5 w-[70vw] py-9 ">
          <div>
            {" "}
            <img src={flogo} class="mt-8"></img>
            <span class="text-gray-400">© R Singhania</span>
          </div>
          <div class="ml-9 text-white">
            <a>Company</a>
            <br />
            <a class="text-gray-400">About</a>
            <br />
            <a class="text-gray-400">FAQ</a>
          </div>
          <div class="ml-[-4] text-white">
            <a>Terms</a>
            <br />
            <a class="text-gray-400">
              Data privacy
              <br />
              Terms
            </a>
            <br />
            <a class="text-gray-400">Accessibility</a>
          </div>
          <div class="text-white">
            <a class="font-semibold">Related</a>
            <br />
            <a class="text-gray-400">Find buyer</a>
            <br />
            <a class="text-gray-400">Feedback</a>
          </div>
          <div class="flex">
            <button class="bg-transparent hover py-1 px-2 hover:border-transparent rounded">
              <img src={linked}></img>
            </button>
            <button class="bg-transparent hover py-1  hover:border-transparent rounded">
              <img src={tweet}></img>
            </button>
            <button class="bg-transparent hover py-1 px-2 hover:border-transparent rounded">
              <img src={fb}></img>
            </button>
            <button class="bg-transparent hover py-1  hover:border-transparent rounded">
              <img src={ig}></img>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default homepage;
