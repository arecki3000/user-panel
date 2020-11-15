<div className="page-trainer">
  <Helmet
    title={`${name || ""} - Justfitup`}
    description={`${stripHTML(about) || ""}`}
    additionalKeywords={[name]}
    image={`${process.env.REACT_APP_UPLOADED_IMAGES_SRC}${avatar}`}
  />
  <Jumbotron>
    <div className="container">
      <div className="row">
        <div className="col-md-12 jumbotron-content">
          <h1>
            {name}
            {(isProfileVerified || isPremium) && (
              <VerifiedIcon isGold={isPremium} />
            )}
          </h1>
          {!_.isEmpty(quote) && <span> - {quote}</span>}
        </div>
        <div className="my-trainer">
          <div className="container">
            <div className="row">
              <div className="jumbotron-wrapper">
                {!_.isEmpty(avatar) && (
                  <div className="trainer">
                    {isProfileOwner ? (
                      <Avatar
                        isEditable
                        isActive={
                          ownerAvatar ===
                          "/justfitup/uploads/default-avatar.png"
                        }
                        src={
                          ownerAvatar
                            ? `${process.env.REACT_APP_UPLOADED_IMAGES_SRC}${ownerAvatar}`
                            : undefined
                        }
                      />
                    ) : (
                      <img
                        className="avatar-image"
                        src={`${process.env.REACT_APP_UPLOADED_IMAGES_SRC}${avatar}`}
                        alt="image"
                        onClick={this.handleOnImageClick}
                      />
                    )}
                    <Button
                      onClick={
                        _.isEmpty(currentUserProfile)
                          ? this.openSignupModal
                          : this.createChatWithTrainer(profile.id)
                      }
                      kind={Button.KIND.TERTIARY}
                    >
                      Wyślij wiadomość
                    </Button>
                  </div>
                )}
                {(isAnyProfileFieldDefined || isProfileOwner) && (
                  <div className="about">
                    <table>
                      <tbody>
                        {(!_.isEmpty(age) || isProfileOwner) && (
                          <tr>
                            <td>WIEK:</td>
                            <td>
                              {numberToYears(age) || (
                                <Link
                                  className="link-edit"
                                  to={ROUTES.panelAccountWebsite}
                                >
                                  Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                                </Link>
                              )}
                            </td>
                          </tr>
                        )}
                        {(!_.isEmpty(experience) || isProfileOwner) && (
                          <tr>
                            <td>DOŚWIADCZENIE:</td>
                            <td>
                              {numberToYears(experience) || (
                                <Link
                                  className="link-edit"
                                  to={ROUTES.panelAccountWebsite}
                                >
                                  Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                                </Link>
                              )}
                            </td>
                          </tr>
                        )}
                        {(!_.isEmpty(achievements) || isProfileOwner) && (
                          <tr>
                            <td>OSIĄGNIĘCIA:</td>
                            <td>
                              {achievements || (
                                <Link
                                  className="link-edit"
                                  to={ROUTES.panelAccountWebsite}
                                >
                                  Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                                </Link>
                              )}
                            </td>
                          </tr>
                        )}
                        {(!_.isEmpty(specializations) || isProfileOwner) && (
                          <tr>
                            <td>SPECJALIZACJE:</td>
                            <td>
                              {specializations || (
                                <Link
                                  className="link-edit"
                                  to={ROUTES.panelAccountWebsite}
                                >
                                  Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                                </Link>
                              )}
                            </td>
                          </tr>
                        )}
                        {(!_.isEmpty(interests) || isProfileOwner) && (
                          <tr>
                            <td>ZAINTERESOWANIA:</td>
                            <td>
                              {interests || (
                                <Link
                                  className="link-edit"
                                  to={ROUTES.panelAccountWebsite}
                                >
                                  Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                                </Link>
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
                {(isAnySocialMediaDefined || isProfileOwner) && (
                  <div className="social-footer">
                    <div className="ico">
                      {(!_.isEmpty(instagram) || isProfileOwner) && (
                        <SocialMediaLink
                          isLink={!_.isEmpty(instagram)}
                          link={`https://instagram.com/${instagram}`}
                        >
                          <i className="fab fa-instagram" />
                          {instagram || (
                            <Link
                              className="link-edit"
                              to={ROUTES.panelAccountSocialMedia}
                            >
                              Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                            </Link>
                          )}
                        </SocialMediaLink>
                      )}
                      {(!_.isEmpty(facebook) || isProfileOwner) && (
                        <SocialMediaLink
                          isLink={!_.isEmpty(facebook)}
                          link={`https://facebook.com/${facebook}`}
                        >
                          <i className="fab fa-facebook-f" />
                          {facebook || (
                            <Link
                              className="link-edit"
                              to={ROUTES.panelAccountSocialMedia}
                            >
                              Uzupełnij <SVG src={PenIcon} alt="edytuj" />
                            </Link>
                          )}
                        </SocialMediaLink>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Jumbotron>
  {(!_.isEmpty(specialistProducts) || (isProfileOwner && isTrainer)) && (
    <section className="products">
      <div className="container">
        <h2 className="title">Oferta</h2>
        <div className="row">
          {!_.isEmpty(specialistProducts) && _.size(specialistProducts) > 4 ? (
            <Carousel template="products" products={specialistProducts} />
          ) : (
            _.map(
              specialistProducts,
              ({
                name,
                description,
                priceWithFee,
                image = "https://via.placeholder.com/350x250",
                id,
                priceBeforeDiscount
              }) => (
                <Link to={`/oferty/${id}`} className="col-md-3 column" key={id}>
                  <div className="card single-product">
                    <div className="card-header">
                      {!_.isEmpty(image) && (
                        <img className="product-main-photo" src={image} />
                      )}
                    </div>
                    <div className="card-content">
                      {!_.isEmpty(name) && <h2>{name}</h2>}
                      {!_.isEmpty(description) && (
                        <p>{_.truncate(description, 120)}</p>
                      )}
                      {!_.isNil(priceWithFee) && (
                        <StyledPrice isDiscounted={priceBeforeDiscount}>
                          <span className="price">
                            {formatPriceToUI(priceWithFee, "zł")}
                          </span>
                          {priceBeforeDiscount && (
                            <span className="full-price">
                              {formatPriceToUI(priceBeforeDiscount, "zł")}
                            </span>
                          )}
                        </StyledPrice>
                      )}
                    </div>
                    <div className="card-footer">
                      {!_.isEmpty(id) && (
                        <Button dynamicGradient>
                          Zobacz szczegóły{" "}
                          <StyledButtonArrow src={ArrowRight} />
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              )
            )
          )}
          {isProfileOwner && isTrainer && _.size(specialistProducts) < 4 && (
            <div className="col-md-3" key="new-product">
              <Link to={ROUTES.panelProducts}>
                <div className="card single-product single-product__new">
                  <div className="card-content">
                    <i className="far fa-plus-square" />
                    <p>Utwórz nową ofertę</p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )}
  <section className={`bio ${_.isEmpty(stripHTML(about)) ? "bio-empty" : ""}`}>
    <div className="container">
      <div className="row">
        {(!_.isEmpty(stripHTML(about)) || isProfileOwner) && (
          <div className="col-md-12">
            <h2 className="title">
              O mnie{" "}
              {isProfileOwner && (
                <small>
                  <Link to={ROUTES.panelAccountWebsite}>
                    Edytuj <SVG src={PenIcon} alt="edytuj" />
                  </Link>
                </small>
              )}
            </h2>
            {ReactHtmlParser(about)}
          </div>
        )}
      </div>
    </div>
  </section>
  {!_.isEmpty(instagramProfile) && (
    <section className="photostream">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Instagram Feed ({_.get(instagramProfile, "username")})</h2>
            <div className="profil-status">
              {_.get(instagramProfile, "is_private") && (
                <div className="profile-status-private">
                  <img
                    src={_.get(instagramProfile, "profile_pic_url")}
                    alt={`avatar ${name}`}
                  />
                  <p>Profil prywatny</p>
                </div>
              )}
            </div>
            <InstagramBiography>
              {_.get(instagramProfile, "biography")}
            </InstagramBiography>
            {isProfileOwner && _.get(instagramProfile, "is_private") && (
              <p>
                Aby zobaczyć w tym miejscu galerię Twoich zdjęć zmień ustawienia
                konta w serwisie Instagram na profil publiczny.
              </p>
            )}
          </div>
        </div>
        <div className="row scrolling-wrapper">
          {_.map(
            _.get(instagramProfile, "edge_owner_to_timeline_media.edges"),
            (image, index) => (
              <div className="col-sm-4 col-md-2 no-wrap" key={index}>
                <img
                  src={image.node.thumbnail_resources[3].src}
                  alt="instagram feed"
                  onClick={() => this.handleOnImageClick(event, index)}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )}
  {isSignupModalOpen && (
    <Modal title="Szybka rejestracja" dismissModal={dismissSignupModal}>
      <QuickRegistration onRegister={this.createChatWithTrainer(profile.id)} />
    </Modal>
  )}
  <div className="modal-image-preview">
    {isImageModalActive && (
      <Modal dismissModal={this.dismissImageModal}>
        <React.Fragment>
          {instagramProfile && (
            <NavigationButton
              onClick={this.navigateToImage({
                imageIndex: activeImageIndex - 1
              })}
              left
            >
              <SVG src={ChevronLeft} alt="Poprzednie" />
            </NavigationButton>
          )}
          <img src={modalImageUrl} className="preview" alt="image" />
          {instagramProfile && (
            <NavigationButton
              onClick={this.navigateToImage({
                imageIndex: activeImageIndex + 1
              })}
              right
            >
              <SVG src={ChevronRight} alt="Następne" />
            </NavigationButton>
          )}
        </React.Fragment>
      </Modal>
    )}
  </div>
</div>;
