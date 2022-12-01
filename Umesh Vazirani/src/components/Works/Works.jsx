import React, { useContext } from "react";
import "./Works.css";
 
import { themeContext } from "../../Context";
 
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Selected Publications
          </span>
          <span> </span>
          <spane>
          S. Arora, S. Rao, and U. Vazirani, "Geometry, flows, and graph-partitioning algorithms," Communications ACM, vol. 51, no. 10, pp. 96-105, Oct. 2008.
            <br /><br />
            L. Orecchia, L. J. Schulman, U. Vazirani, and N. K. Vishnoi, "On partitioning graphs via single commodity flows," in Proc. 40th Annual ACM Symp. on Theory of Computing (STOC 2008), New York, NY: The Association for Computing Machinery, Inc., 2008, pp. 461-470.
            <br /><br />
            A. Mehta, A. Saberi, U. Vazirani, and V. Vazirani, "Adwords and generalized online matching," J. ACM, vol. 54, no. 5, pp. Art. 22, Oct. 2007.
            <br /><br />
            S. Dasgupta, C. H. Papadimitriou, and U. Vazirani, Algorithms, Boston, MA: McGraw-Hill Higher Education, 2006.
            <br/><br />
            R. Khandekar, S. Rao, and U. Vazirani, "Graph partitioning using single commodity flows," in Proc. 38th Annual ACM Symp. on Theory of Computing, New York, NY: ACM Press, 2006, pp. 385-390.
            <br/><br />
            A. Mehta, A. Saberin, U. Vazirani, and V. Vazirani, "AdWords and generalized on-line matching," in Proc. 46th Annual IEEE Symp. on Foundations of Computer Science, Los Alamitos, CA: IEEE Computer Society Press, 2005, pp. 264-273.
            <br/><br />
            S. Arora, S. Rao, and U. Vazirani, "Expander flows, geometric embeddings and graph partitioning," in Proc. 36th Annual ACM Symp. on Theory of Computing, New York, NY: ACM Press, 2004, pp. 222-231.
            <br/><br />
            M. Grigni, L. J. Schulman, M. Vazirani, and U. Vazirani, "Quantum mechanical algorithms for the nonabelian hidden subgroup problem," Combinatorica, vol. 24, no. 1, pp. 137-154, Jan. 2004.
            <br/><br />
            P. L. Vora, V. E. Knapp, and U. V. Vazirani, "Probabilistic privacy protection," U.S. Patent 6,470,299. Oct. 2002.
            <br/><br />
            W. van Dam, M. Mosca, and U. Vazirani, "How powerful is adiabatic quantum computation?," in Proc. 42nd IEEE Symp. on Foundations of Computer Science, Los Alamitos, CA: IEEE Computer Society Press, 2001, pp. 279-287.
            <br/><br />
            E. Bernstein and U. Vazirani, "Quantum complexity theory," SIAM J. on Computing, vol. 26, no. 5, pp. 1411-1473, Oct. 1997.
            <br/><br />
            C. H. Bennett, E. Bernstein, G. Brassard, and U. Vazirani, "Strengths and weaknesses of quantum computing," SIAM J. on Computing, vol. 26, no. 5, pp. 1510-1523, Oct. 1997.
            <br/><br />
            M. J. Kearns and U. Vazirani, An Introduction to Computational Learning Theory, Cambridge, MA: MIT Press, 1994.
            <br/><br />
            R. M. Karp, U. Vazirani, and V. V. Vazirani, "An optimal algorithm for on-line bipartite matching," in Proc. 22nd Annual ACM Symp. on Theory of Computing, H. Ortiz, Ed., New York, NY: ACM Press, 1990, pp. 352-358.
            <br/><br />
            K. Mulmuley, U. Vazirani, and V. V. Vazirani, "Matching is as easy as matrix inversion," in Proc. 19th Annual ACM Conf. on Theory of Computing, A. V. Aho, Ed., New York, NY: ACM Press, 1987, pp. 345-354.
            <br/><br />
            M. Santha and U. Vazirani, "Generating quasi-random sequences from semi-random sources," J. Computer and System Sciences, vol. 33, no. 1, pp. 75-87, Aug. 1986.
            <br/><br />
            U. Vazirani and V. V. Vazirani, "Random polynomial time is equal to slightly-random polynomial time," in Proc. 26th Annual IEEE Symp. on Foundations of Computer Science, Washington, DC: IEEE Computer Society Press, 1985, pp. 417-428.
          </spane>
           
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
        
    </div>
  );
};

export default Works;
