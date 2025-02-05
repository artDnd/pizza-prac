import ContentLoader from "react-content-loader";
const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={330}
    height={450}
    viewBox="0 0 330 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="124" cy="126" r="124" />
    <rect x="18" y="268" rx="10" ry="10" width="204" height="24" />
    <rect x="0" y="312" rx="10" ry="10" width="242" height="70" />
    <rect x="0" y="410" rx="10" ry="10" width="101" height="35" />
    <rect x="144" y="410" rx="10" ry="10" width="100" height="35" />
  </ContentLoader>
);

export default Skeleton;
