
import { Input, Button } from "react-daisyui";
const SigUpForm = ({
  formHandler,
  formRef,
  user,
  inputArgs,
  setAction,
  loading,
children
}) => {
  return (
    <form
      onSubmit={formHandler.submit}
      ref={formRef}
      className="flex flex-col items-center"
    >
      {user ? (
        <></>
      ) : (
        <>
          {' '}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Numele tau</span>
            </label>
            <Input
              onInput={formHandler.nume}
              name="nume"
              type="text"
              required
              {...inputArgs}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Prenume</span>
            </label>
            <Input
              onInput={formHandler.preNume}
              name="prenume"
              type="text"
              required
              {...inputArgs}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Adresa de Email</span>
            </label>
            <Input
              onInput={formHandler.email}
              name="email"
              type="email"
              required
              {...inputArgs}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Parola </span>
            </label>
            <Input
              onInput={formHandler.parola}
              name="password"
              type="password"
              required
              {...inputArgs}
            />
          </div>
          {children}
        </>
      )}
      <Button
        loading={loading}
        onSubmit={formHandler.submit}
        type="submit"
        className="btn btn-primary text-base-100 m-5"
      >
        Comanda Cursul!
      </Button>

      {user ? null : (
        <div className="block m-auto prose  text-secondary">
          Ai deja cont? Logeaza-te{' '}
          <span
            onClick={() => {
              setAction('login');
            }}
            className="link link-primary"
          >
            aici
          </span>{' '}
        </div>
      )}
    </form>
  );
};


export default SigUpForm;