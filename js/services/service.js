const getResource = async (url) => {
   const res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, statys: ${res.status}`);
   }

   return await res.json();                                                            // res.json() - метод у fetch'a который json формат переводит в обычный объект для юзания на сайте
}


const posting = async (url, data) => {
   const res = await fetch(url, {
      method: "POST",
      headers: {
         'Content-type': 'application/json'
      },
      body: data
   })

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, statys: ${res.status}`);
   }

   return await res.json();
}


export {getResource};
export {posting};