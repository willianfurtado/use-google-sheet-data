import { useState, useEffect } from "react";

export default function useGoogleSheetData(apiKey: string, spreadSheetId: string, range: string) {
  const [data, setData] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    
    const loadPrice = async () => {
      setError(null);

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/${range}?key=${apiKey}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro HTTP! Código: ${response.status}`);
        }

        const dataPrice = await response.json();
        setData(dataPrice.values || []);
      } catch (error: any) {
        setError(error.message);
      } 
    };

    loadPrice(); 
  }, [apiKey, spreadSheetId, range]);

  return { data, error };
}


