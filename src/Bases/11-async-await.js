const getImage = async () => {
  try {
    const apiKey = "Ct3EXi26K62tW69PidBmxmhGGGs0eoh0";
    const urlBase = "https://api.giphy.com/v1/gifs/random";
    const resp = await fetch(`${urlBase}?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // Manejo del error
  }
};

getImage().then(console.log());

// const apiKey = "Ct3EXi26K62tW69PidBmxmhGGGs0eoh0";
// const urlBase = "https://api.giphy.com/v1/gifs/random";

// const peticion = fetch(`${urlBase}?api_key=${apiKey}`);

// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     console.log(data);
//     const { url } = data.images.original;
//     //console.log('url', url);

//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append(img);
//   })
//   .catch(console.warn);
