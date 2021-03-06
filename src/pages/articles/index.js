import React, { useEffect } from "react";
import Section from "../../components/Section";
import { useParams } from "react-router-dom";

function ArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let { slug } = useParams();

  return (
    <div id="home">
      <Section
        name="articles"
        classList="text-center"
        html={
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="text-white-50">Article not found</p>
              </div>
            </div>
          </div>
        }
      ></Section>
      <div>Could not find article {slug}</div>
    </div>
  );
}

export default ArticlePage;
