//Checking environment variables
if(!process.env.NEXT_PUBLIC_APP_URL){
  throw new Error('Missing environment variables: NEXT_PUBLIC_APP_URL');
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

let config: RequestInit = {
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  headers: {
    "Content-Type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
}

class User {
  public login = async (username: string, password:string) => {
    const res = await fetch(`${appUrl}/api/auth/login`,{
      ...config,
      method: 'POST',
      body: JSON.stringify({
        username, password
      })
    })

    if(res.ok){
      return await res.json()
    }else{
      return false
    }
  }

  public verify = async (token: string) => {
    const res = await fetch(new URL(`${appUrl}/api/auth/verify`), {
      method: "POST",
      body: JSON.stringify({
        token
      })
    })

    if(res.ok){
      return await res.json();
    }else{
      return false;
    }
  }
}

export const user = new User()