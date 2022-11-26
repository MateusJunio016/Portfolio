import styled from "styled-components";
import { useEffect, useRef } from "react";

import { Anchor, Link } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes";

const Container = styled.div`
  position: relative;
  ${mediaQueries(40)`
    
    display:none;
  `};
`;

const PreDisplay = styled.div`
  position:absolute;
  top:0;
  right:2rem;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  color: rgba(46,106,113,255);
  .chain {
    transform: rotate(135deg);
  }
`;

const AnchorComponent = (props) => {
    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
            let diffP = (diff * 100) / (bodyHeight - windowSize);

            do {
                ref.current.style.transform = `translateY(${-diffP}%)`;

                if (window.pageYOffset > 5) {
                    hiddenRef.current.style.display = "none";
                } else {
                    hiddenRef.current.style.display = "block";
                }
            } while(ref != null)
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <Container>
            <PreDisplay ref={hiddenRef} className="hidden">
                <Anchor width={104} height={134} fill="currentColor" />
            </PreDisplay>
            <Slider ref={ref}>
                {[...Array(props.number)].map((x, id) => {
                    return (
                        <Link
                            key={id}
                            style={{ padding: "0.1rem 0" }}
                            width={25}
                            height={25}
                            fill="currentColor"
                            className="chain"
                        />
                    );
                })}
                <Anchor width={104} height={134} fill="currentColor" />
            </Slider>
        </Container>
    );
};

export default AnchorComponent;