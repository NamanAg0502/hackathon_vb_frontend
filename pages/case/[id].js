import { Chip, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import LawyerCard from "../../components/case/lawyerCard";
import { SUCCESS } from "../../constants/status.code";
import { USER } from "../../constants/user";
import { UserContext } from "../_app.js";

function Case() {
  const router = useRouter();
  const [userContext, setUserContext] = useContext(UserContext);
  const [caseDetails, setCaseDetails] = useState({});
  const fetchCaseDetails = async () => {
    if (userContext.userType === USER.CLIENT) {
      const caseResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/id/check`,
        {
          headers: {
            token: localStorage.getItem("LAWKIT_TOKEN"),
            caseid: router.query.id,
          },
        }
      );
      if (
        caseResponse.data.content.length ===
        SUCCESS.CLIENT_CASE_FETCH_SUCCESSFUL
      )
        setCaseDetails(caseResponse.data.content);
    } else {
      const caseResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/id`,
        {
          headers: {
            token: localStorage.getItem("LAWKIT_TOKEN"),
            caseid: router.query.id,
          },
        }
      );
      if (caseResponse.data.status === SUCCESS.CLIENT_CASE_FETCH_SUCCESSFUL)
        setCaseDetails(caseResponse.data.content);
    }
  };

  useEffect(() => {
    if (router.query.id && userContext) fetchCaseDetails();
  }, [router.query, userContext]);

  console.log(caseDetails);

  return (
    <div>
      <div className="text-black w-[100vw] min-h-[60vh]">
        <div className="w-[90vw] md:w-[800px] m-auto mt-10 mb-10 ">
          <Typography variant="h3" className="mb-5">
            {caseDetails.caseName}
          </Typography>
          <Typography variant="h5" className="mb-3">
            Tags:
          </Typography>
          {caseDetails.caseTags && (
            <div className="mb-5">
              {caseDetails.caseTags.map((tag, index) => (
                <div
                  key={`TAG_${index}`}
                  className="badge badge-primary p-3 badge-outline"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <Typography variant="h5" className="mb-3">
            Description:
          </Typography>
          <Typography className="mb-5">
            {caseDetails.caseDescription}
          </Typography>
          <Typography variant="h5" className="mb-3">
            Lawyer:
          </Typography>
          <Typography className="mb-5">
            {caseDetails.lawyer
              ? caseDetails.lawyer.name
              : "No lawyers on this case till now"}
          </Typography>
          <Typography variant="h5" className="mb-3">
            Lawyers Interested:
          </Typography>
          <div className="mb-5">
            {caseDetails.requests && caseDetails.requests.length ? (
              <div>
                {caseDetails.requests.map((lawyer, index) => (
                  // <div></div>
                  <LawyerCard key={`Lawyer_${index}`} data={lawyer} />
                ))}
              </div>
            ) : (
              <Typography>
                No lawyers interested to take this case at the moment
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case;
