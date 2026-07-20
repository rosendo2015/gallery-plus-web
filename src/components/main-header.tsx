import Container from "./container";
import Logo from "../assets/images/galeria-plus-full-logo.svg?react";
import { Link, useLocation } from "react-router";
import cx from "classnames";
import Button from "./button";
import PhotosSearch from "./photos-search";
import Divider from "./divider";
import PhotoNewDialog from "../contexts/photos/components/photo-new-dilog";
import AlbumNewDialog from "../contexts/albums/components/album-new-dialog";

interface MainHeaderProps extends React.ComponentProps<typeof Container> {
  // Define any props for the MainHeader component here if needed
}

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  const { pathname } = useLocation();

  return (
    <Container
      as="header"
      className={cx("flex items-center justify-between gap-10", className)}
      {...props}
    >
      <Link to="/">
        <Logo className="h-5" />
      </Link>
      {pathname === "/" && (
        <>
          <PhotosSearch />
          <Divider orientation="vertical" className="h-10" />
        </>
      )}
      <div className="flex items-center gap-4">
        <PhotoNewDialog
          trigger={<Button variant="primary">Nova foto</Button>}
        />
        <AlbumNewDialog
          trigger={<Button variant="secondary">Criar album</Button>}
        />
      </div>
    </Container>
  );
}
