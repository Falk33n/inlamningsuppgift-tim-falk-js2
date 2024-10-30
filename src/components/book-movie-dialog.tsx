import { BookMovieForm } from '@/components';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

export const BookMovieDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-6 capitalize'>Book seats</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='capitalize'>Book seats</DialogTitle>
          <DialogDescription>
            Book your seats by filling in the form, press Submit when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <BookMovieForm />
      </DialogContent>
    </Dialog>
  );
};

BookMovieDialog.displayName = 'BookMovieDialog';
