const { default: Image } = require("next/image");

const Services = () => {
  const data = [
    {
      imageUrl: "/arabic.png",
      name: "Reading Arabic",
      content:
        "Our teaching approach focuses on gradual memorisation and deep precision. Hence, we first delve into the correct pronunciation of each Arabic letter.",
    },
    {
      imageUrl: "/tajweed.jpg",
      name: "Tajweed & Hifdh",
      content:
        "Thereupon, we continue with teaching the science of Tajweed - there, we use the book `Noor al-Bayān fee Mu'allimu al-Qirā'ati al-Qur'ān'. Also, we gradually bring the student closer to the memorization of the Quran",
    },  {
        imageUrl: "/hadith.jpg",
        name: "Hadeeth",
        content:
          "As for Hadith, we aim to make the students memorize short Ahādeeth from Saheeh al-Bukhāri and Saheeh Muslim, ensuring a well-rounded Islamic foundation. More precisely, we use the Book 100 Hadeeths for memorization from Saheeh al-Bukhāri & Muslim",
      },
  ];
  return (
    <>
      <div style={{height:"100vh",backgroundColor:"#0249a5"}}  className="flex flex-row align-middle justify-center flex-wrap   w-full ">
        {data.map((service, index) => (
          <div key={index} className="w-3/12 p-5 h-full flex flex-col align-middle justify-center gap-5" >
            <img
              src={service.imageUrl}
              
              style={{height:"300px",width:"300px"}}
              className="rounded-3xl  "
              alt={service.name}
            />
            <div className="flex flex-col gap-3 justify-center align-middle text-center  ">
              <h4 className="text-3xl text-white font-bold ">{service.name}</h4>
              <h5 className="text-1xl text-white">{service.content}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;