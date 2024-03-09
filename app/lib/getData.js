export async function getData(endpoint) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/${endpoint}`, {
        cache: "no-store",
      });
      if(!response.ok){
        throw new Error('Failed to fetch Customer')
       
      }
      const data = await response.json();
    
      return data
    } catch (error) {
      console.log("ERROE LOADING CUSTOMER",error);
    }
  }