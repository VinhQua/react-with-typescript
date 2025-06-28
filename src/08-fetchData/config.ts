import axios from "axios";
import { z } from "zod";
import { th } from "zod/v4/locales";

const url = "https://www.course-api.com/react-tours-project";

const tourShema = z.object({
  info: z.string(),
  image: z.string(),
  price: z.string(),
  name: z.string(),
  id: z.string(),
});
type Tour = z.infer<typeof tourShema>;
export const fetchData = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);

  const result = tourShema.array().safeParse(response.data);
  if (!result.success) {
    console.log(result.error.message);
    throw new Error("Failed To Parse Data");
  }
  return response.data;
};
