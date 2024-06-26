import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useDashboardList = () => {
  const url =
    "https://file.notion.so/f/f/0251deb5-5691-4b51-a995-c367fb0fe278/85305ad5-9977-4cf1-83f3-14c479bdbfc9/api.json?id=ccf55ef0-6a5e-43c9-a99a-273f1393cd7e&table=block&spaceId=0251deb5-5691-4b51-a995-c367fb0fe278&expirationTimestamp=1719360000000&signature=pw9LzVD6D5aUG6HSCCJhPTc0QsCiwK7D2_6J79Fm6L4&downloadName=BancodeDados.json";

  const [dash, setDash] = useState<Dashboard.IOrder[]>([]);

  const getDash = useCallback(async () => {
    const response = await axios.get(url);

    setDash(response.data);
  }, []);

  useEffect(() => {
    getDash();
  }, [getDash]);

  return { dash };
};
