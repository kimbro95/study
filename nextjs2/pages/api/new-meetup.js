import excuteQuery from "../../lib/dbConnect";

// /api/new-meetup
const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { title, image, address, description } = data;
      const result = await excuteQuery({
        query:
          "INSERT INTO meetups (title, image, address, description) VALUES(?, ?, ?, ?)",
        values: [title, image, address, description],
      });
      console.log(result);
      res.status(201).json({ message: "Meetup Inserted !" });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
