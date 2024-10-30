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
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <BookMovieForm />
      </DialogContent>
    </Dialog>
  );
};

BookMovieDialog.displayName = 'BookMovieDialog';
