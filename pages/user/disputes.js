import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_DISPUTES = gql`
  {
    disputes {
      id
      toolId
      userId
    }
  }
`;

const Page = () => {
  const { loading, error, data } = useQuery(GET_DISPUTES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
        {data.disputes.map(dispute => (
          <li key={dispute.id}>Dispute {dispute.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
